window.addEventListener('load', function () {
    Viewer.setDefaults({
        url: 'data-original',
        title: function (image) {
            return image.alt + ' (' + (this.index + 1) + '/' + this.length + ')';
        },
        toolbar: {
            zoomIn: 1,
            zoomOut: 1,
            oneToOne: 1,
            reset: 1,
            prev: 1,
            play: {show: 1, size: 'large'},
            next: 1,
            rotateLeft: 1,
            rotateRight: 1,
            flipHorizontal: 0,
            flipVertical: 0,
            download: function() {
                const a = document.createElement('a');
                a.href = viewer.image.src;
                a.download = viewer.image.alt;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            },
        },
    });
    var viewer = new Viewer(document.getElementById('gal_001'));
});
