"use strict";window.gl={behavior:{},queryLocalize:{},element:{}};var localesBehavior={attached:function(){this.set("language",localStorage.glLanguage),this.resources=mergeLocales},glSwitchLanguage:function(e){localStorage.glLanguage=e;for(var a in gl.queryLocalize)gl.queryLocalize[a].language=e},ready:function(){gl.queryLocalize[this.is]=this},detached:function(){delete gl.queryLocalize[this.is]}};gl.behavior.locales=[Polymer.AppLocalizeBehavior,localesBehavior],gl.behavior.core={glChangePath:function(e){window.gl.glonSys.changePath(e)},glSetLayout:function(e){window.gl.glonSys.layout=e},glSetTitle:function(e){document.title=e},glQuery:function(e){var a=arguments.length<=1||void 0===arguments[1]?"get":arguments[1];return"get"==a?gl.element[e]:void(gl.element[e]=a)},glClone:function(e){return JSON.parse(JSON.stringify(e))}},gl.behavior.template={observers:["getPage(page)"],getPage:function(e){var a=this.$$("tag-page-load");a.innerHTML="",a.appendChild(e)}};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb24tYmVoYXZpb3IuanMiXSwibmFtZXMiOlsid2luZG93IiwiZ2wiLCJiZWhhdmlvciIsInF1ZXJ5TG9jYWxpemUiLCJlbGVtZW50IiwiYXR0YWNoZWQiLCJsb2NhbGVzQmVoYXZpb3IiLCJsb2NhbFN0b3JhZ2UiLCJnbExhbmd1YWdlIiwibWVyZ2VMb2NhbGVzIiwiZ2xTd2l0Y2hMYW5ndWFnZSIsImxvY2FsIiwicmVhZHkiLCJ0aGlzIiwiaXMiLCJsb2NhbGVzIiwiUG9seW1lciIsIkFwcExvY2FsaXplQmVoYXZpb3IiLCJnbENoYW5nZVBhdGgiLCJwYXRoIiwiY29yZSIsImdsb25TeXMiLCJjaGFuZ2VQYXRoIiwibGF5b3V0IiwiZG9jdW1lbnQiLCJ0aXRsZSIsInR4dCIsImVsIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwibmFtZSIsImdsUXVlcnkiLCJnbENsb25lIiwiZGF0YSIsInN0cmluZ2lmeSIsIkpTT04iLCJvYnNlcnZlcnMiLCJnZXRQYWdlIiwicGFnZSIsInF1ZXJ5VGFnIiwiJCQiLCJ0ZW1wbGF0ZSIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiWUFBQUEsUUFBT0MsSUFBTUMsWUFBWUMsaUJBQWlCQyxXQUExQ0osSUFBQUEsa0JBR0lLLFNBQVUsV0FEUkMsS0FBQUEsSUFBQUEsV0FBa0JDLGFBQUFDLFlBQ3BCSCxLQUFBQSxVQUFVSSxjQUVSQyxpQkFBaUJELFNBQUFBLEdBSENGLGFBQUFDLFdBQUFHLENBS3BCRCxLQUFBQSxHQUFBQSxLQUFrQlQsSUFBQUUsY0FDaEJJLEdBQUFBLGNBQWFDLEdBQWFHLFNBQTFCQSxHQUdDQyxNQUFBLFdBVGlCWCxHQUFBRSxjQUFBVSxLQUFBQyxJQUFBRCxNQVlsQlosU0FBR0UsaUJBWmVGLElBQUFFLGNBQUFVLEtBQUFDLEtBZ0JuQmIsSUFBQUMsU0FBQWEsU0FBQUMsUUFBQUMsb0JBQUFYLGlCQUVITCxHQUFHQyxTQUFTYSxNQUdSRyxhQUFjLFNBQVNDLEdBRHhCakIsT0FBU2tCLEdBQVpDLFFBQW1CQyxXQUFBSCxJQUVibkIsWUFBVXFCLFNBQVFDLEdBRkx0QixPQUFBQyxHQUFBb0IsUUFBQUUsT0FBQUEsR0FLYnZCLFdBQVVxQixTQUFRRSxHQUxMQyxTQUFBQyxNQUFBQyxHQVFiRixRQUFTQyxTQUFRQyxHQUFqQixHQUFBQyxHQUFBQyxVQUFBQyxRQUFBLEdBQUFDLFNBQUFGLFVBQUEsR0FBQSxNQUFBQSxVQUFBLEVBUmEsT0FBQSxPQUFBRCxFQWNKMUIsR0FBR0csUUFBUTJCLFFBSnRCQyxHQUFRNUIsUUFBQTJCLEdBQVNBLElBQ2ZFLFFBRUssU0FBQUMsR0FDSCxNQUFPakMsTUFBR0csTUFBUTJCLEtBQWxCSSxVQUFBRCxNQUlGakMsR0FBQUMsU0FBT2tDLFVBQ1JDLFdBQUEsaUJBbkJMQyxRQUFBLFNBQUFDLEdBeUJJLEdBQUlDLEdBQVczQixLQUFLNEIsR0FBRyxnQkFIeEJ2QyxHQUFTd0MsVUFBVyxHQUNyQkwsRUFBV00sWUFBQUoiLCJmaWxlIjoiZ2xvbi1iZWhhdmlvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5nbCA9IHtiZWhhdmlvcjp7fSxxdWVyeUxvY2FsaXplOnt9LGVsZW1lbnQ6e319O1xuXG4gIGxldCBsb2NhbGVzQmVoYXZpb3IgPSB7XG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLnNldCgnbGFuZ3VhZ2UnLGxvY2FsU3RvcmFnZS5nbExhbmd1YWdlKTtcbiAgICAgIHRoaXMucmVzb3VyY2VzID0gbWVyZ2VMb2NhbGVzO1xuICAgIH0sXG4gICAgZ2xTd2l0Y2hMYW5ndWFnZTogZnVuY3Rpb24obG9jYWwpe1xuICAgICAgbG9jYWxTdG9yYWdlLmdsTGFuZ3VhZ2UgPSBsb2NhbDtcbiAgICAgIGZvcih2YXIga2V5IGluIGdsLnF1ZXJ5TG9jYWxpemUpIHtcbiAgICAgICAgZ2wucXVlcnlMb2NhbGl6ZVtrZXldLmxhbmd1YWdlID0gbG9jYWw7XG4gICAgICB9XG4gICAgfSxcbiAgICByZWFkeTogZnVuY3Rpb24oKXtcbiAgICAgIGdsLnF1ZXJ5TG9jYWxpemVbdGhpcy5pc10gPSB0aGlzO1xuICAgIH0sXG4gICAgZGV0YWNoZWQ6ZnVuY3Rpb24oKXtcbiAgICAgIGRlbGV0ZSBnbC5xdWVyeUxvY2FsaXplW3RoaXMuaXNdO1xuICAgIH1cbiAgfTtcbiAgZ2wuYmVoYXZpb3IubG9jYWxlcyA9IFtQb2x5bWVyLkFwcExvY2FsaXplQmVoYXZpb3IsIGxvY2FsZXNCZWhhdmlvcl07XG5cbiAgZ2wuYmVoYXZpb3IuY29yZSA9IHtcbiAgICAgIGdsQ2hhbmdlUGF0aDogZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICB3aW5kb3cuZ2wuZ2xvblN5cy5jaGFuZ2VQYXRoKHBhdGgpO1xuICAgICAgfSxcbiAgICAgIGdsU2V0TGF5b3V0OiBmdW5jdGlvbihsYXlvdXQpe1xuICAgICAgICB3aW5kb3cuZ2wuZ2xvblN5cy5sYXlvdXQgPSBsYXlvdXQ7XG4gICAgICB9LFxuICAgICAgZ2xTZXRUaXRsZTpmdW5jdGlvbih0eHQpe1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHR4dDtcbiAgICAgIH0sXG4gICAgICBnbFF1ZXJ5OmZ1bmN0aW9uKG5hbWUsZWw9J2dldCcpe1xuICAgICAgICBpZihlbCE9J2dldCcpe1xuICAgICAgICAgIGdsLmVsZW1lbnRbbmFtZV0gPSBlbDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgcmV0dXJuIGdsLmVsZW1lbnRbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnbENsb25lOmZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICB9XG4gIH07XG5cbiAgZ2wuYmVoYXZpb3IudGVtcGxhdGUgPSB7XG4gICAgb2JzZXJ2ZXJzOlsnZ2V0UGFnZShwYWdlKSddLFxuICAgIGdldFBhZ2U6ZnVuY3Rpb24ocGFnZSl7XG4gICAgICB2YXIgcXVlcnlUYWcgPSB0aGlzLiQkKCd0YWctcGFnZS1sb2FkJyk7XG4gICAgICBxdWVyeVRhZy5pbm5lckhUTUw9Jyc7XG4gICAgICBxdWVyeVRhZy5hcHBlbmRDaGlsZChwYWdlKTtcbiAgICB9XG4gIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
