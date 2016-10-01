declare var OpenSeadragon: any;
declare var paper: any;

namespace IIIFComponents {
    export class OSDSubject implements ISubject {

        public viewer: any;
        public _$wrapper: JQuery;

        constructor(target) {
            console.log(target);
            var _this = this;
            this._$wrapper = $('<div><canvas id="canvas-1" class="paper"></canvas></div>');
            this.viewer = new OpenSeadragon(target);

            this.viewer.addHandler("open", function() {
              _this.addOverlay();
              _this.addTools();
            });
        }

        public freeze(): void {
          console.log("OSD frozen!");
        }

        public addBackground(svgDrawPaper): void {
          console.log("OSD addBackground!");
        }

        public getSubjectType(): SubjectType {
          return new SubjectType('openseadragon');
        }

        private addOverlay(): void {
          var element = document.getElementById('canvas-1');
          var rect = new OpenSeadragon.Rect(0, 0, 1, this.viewer.viewport.getAspectRatio()+.07);

          this.viewer.addOverlay({
              element: element,
              location: rect
          });

          paper.view.viewSize.width = $( "#canvas-1" ).width();
          paper.view.viewSize.height = $( "#canvas-1" ).height();

        }

        private addTools(): void {
          var _this = this;
          $( document ).ready(function() {
            $('#toolbar').append($('<li><button id="drawmode">draw mode (off)</button></li>'));
            $( "#drawmode" ).on( "click", function() {
              if (_this.viewer.isMouseNavEnabled() === true) {
                _this.viewer.setMouseNavEnabled(false)
                $( this ).text('draw mode (on)')
              } else {
                _this.viewer.setMouseNavEnabled(true)
                $( this ).text('draw mode (off)')
              }
              return false;
            });
          });
        }

    }
}

(function(w) {
    if (!w._Components){
        w._Components = _Components;
    }
})(window);
