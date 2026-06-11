/* =========================================================
   BBOTECH — WIND CURSOR TRAIL (Prompt 14I)
   Hiệu ứng "làn gió vi vu" theo sau con trỏ: các wisp xanh nhạt/trắng
   trong, nhỏ, cong, bay nhẹ theo hướng di chuyển rồi tự tan.

   Nguyên tắc:
   - Standalone, KHÔNG phụ thuộc thư viện (không đụng main.js).
   - CHỈ chạy trên desktop pointer tinh (pointer:fine) + viewport ≥ 768px.
   - Tôn trọng prefers-reduced-motion: reduce → không chạy.
   - Throttle bằng requestAnimationFrame; chỉ sinh hạt khi con trỏ
     di chuyển đủ xa (giảm tải, tránh spam DOM).
   - Giới hạn số hạt (pool) + tự dọn node khi animation kết thúc.
   - Layer pointer-events:none → không bao giờ chặn click/scroll.
   - Tạm dừng khi tab ẩn (visibilitychange).
   ========================================================= */
(function () {
  'use strict';

  // ---- Guard điều kiện chạy -------------------------------------------------
  var mqReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mqReduce && mqReduce.matches) return;

  var mqFine = window.matchMedia && window.matchMedia('(pointer: fine)');
  if (!mqFine || !mqFine.matches) return; // bỏ qua thiết bị cảm ứng / pointer thô

  var MIN_WIDTH = 768;
  if (window.innerWidth < MIN_WIDTH) return;

  // ---- Cấu hình -------------------------------------------------------------
  var MAX_PARTICLES = 24;     // trần số hạt đồng thời
  var SPAWN_COOLDOWN = 42;    // ms tối thiểu giữa 2 hạt
  var MIN_DISTANCE = 9;       // px di chuyển tối thiểu mới sinh hạt
  var LIFETIME = 850;         // ms khớp với animation CSS

  // ---- Tạo layer chứa hạt ---------------------------------------------------
  var layer = document.createElement('div');
  layer.className = 'bbo-wind-cursor-layer';
  layer.setAttribute('aria-hidden', 'true');

  function mountLayer() {
    if (document.body) document.body.appendChild(layer);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountLayer, { once: true });
  } else {
    mountLayer();
  }

  // ---- Trạng thái -----------------------------------------------------------
  var particles = [];         // hàng đợi node đang sống (để cắt bớt khi quá tải)
  var lastX = null, lastY = null;
  var pendingX = 0, pendingY = 0;
  var hasPending = false;
  var lastSpawn = 0;
  var rafId = null;
  var paused = false;

  function spawn(x, y, dx, dy) {
    var puff = document.createElement('span');
    puff.className = 'bbo-wind-puff';

    // Hướng trôi: theo chiều di chuyển + dạt nhẹ lên (cảm giác gió bay lên)
    var len = Math.min(26, Math.hypot(dx, dy));
    var driftX = (dx * 0.6) + (Math.random() * 10 - 5);
    var driftY = (dy * 0.6) - (8 + Math.random() * 10);
    var rot = Math.atan2(dy, dx) * (180 / Math.PI) + (Math.random() * 30 - 15);
    var scale = 0.7 + Math.random() * 0.6;

    puff.style.left = x + 'px';
    puff.style.top = y + 'px';
    puff.style.setProperty('--dx', driftX.toFixed(1) + 'px');
    puff.style.setProperty('--dy', driftY.toFixed(1) + 'px');
    puff.style.setProperty('--rot', rot.toFixed(1) + 'deg');
    puff.style.setProperty('--sc', scale.toFixed(2));
    puff.style.setProperty('--len', (10 + len).toFixed(0) + 'px');

    layer.appendChild(puff);
    particles.push(puff);

    // Cắt bớt nếu vượt trần (xoá node cũ nhất)
    while (particles.length > MAX_PARTICLES) {
      var old = particles.shift();
      if (old && old.parentNode) old.parentNode.removeChild(old);
    }

    var removed = false;
    function cleanup() {
      if (removed) return;
      removed = true;
      var i = particles.indexOf(puff);
      if (i !== -1) particles.splice(i, 1);
      if (puff.parentNode) puff.parentNode.removeChild(puff);
    }
    puff.addEventListener('animationend', cleanup, { once: true });
    // Phòng hờ nếu animationend không bắn (tab ẩn…): dọn theo timeout
    setTimeout(cleanup, LIFETIME + 250);
  }

  function flush() {
    rafId = null;
    if (paused || !hasPending) return;
    hasPending = false;

    var now = (window.performance && performance.now) ? performance.now() : Date.now();
    if (lastX === null) { lastX = pendingX; lastY = pendingY; return; }

    var dx = pendingX - lastX;
    var dy = pendingY - lastY;
    var dist = Math.hypot(dx, dy);

    if (dist >= MIN_DISTANCE && (now - lastSpawn) >= SPAWN_COOLDOWN) {
      spawn(pendingX, pendingY, dx, dy);
      lastSpawn = now;
    }
    lastX = pendingX;
    lastY = pendingY;
  }

  function onMove(e) {
    if (paused) return;
    pendingX = e.clientX;
    pendingY = e.clientY;
    hasPending = true;
    if (rafId === null) rafId = window.requestAnimationFrame(flush);
  }

  window.addEventListener('mousemove', onMove, { passive: true });

  // Tạm dừng khi tab ẩn để tránh tích luỹ / tốn tài nguyên
  document.addEventListener('visibilitychange', function () {
    paused = document.hidden;
    if (paused) { lastX = null; lastY = null; }
  });

  // Nếu user thu nhỏ cửa sổ xuống mobile → gỡ effect (giữ nhẹ nhàng)
  window.addEventListener('resize', function () {
    if (window.innerWidth < MIN_WIDTH) {
      paused = true;
      while (particles.length) {
        var p = particles.shift();
        if (p && p.parentNode) p.parentNode.removeChild(p);
      }
    } else {
      paused = document.hidden;
    }
  });
})();
