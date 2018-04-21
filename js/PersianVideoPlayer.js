//region Global Variables
var persianVideoIds = [];
var persianVideoOptions = [];
var persianVideoLoadingBox = "<div class='persian-video-loading-box' id='__Loading__'><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='250px' height='120px' viewBox='0 0 24 30' style='enable-background:new 0 0 50 50;' xml:space='preserve'><rect x='0' y='13' width='4' height='5' fill='#fff'><animate attributeName='height' attributeType='XML' values='5;21;5' begin='0s' dur='0.6s' repeatCount='indefinite'/><animate attributeName='y' attributeType='XML' values='13; 5; 13' begin='0s' dur='0.6s' repeatCount='indefinite'/></rect><rect x='10' y='13' width='4' height='5' fill='#fff'><animate attributeName='height' attributeType='XML' values='5;21;5' begin='0.15s' dur='0.6s' repeatCount='indefinite'/><animate attributeName='y' attributeType='XML' values='13; 5; 13' begin='0.15s' dur='0.6s' repeatCount='indefinite'/></rect><rect x='20' y='13' width='4' height='5' fill='#fff'><animate attributeName='height' attributeType='XML' values='5;21;5' begin='0.3s' dur='0.6s' repeatCount='indefinite'/><animate attributeName='y' attributeType='XML' values='13; 5; 13' begin='0.3s' dur='0.6s' repeatCount='indefinite'/></rect></svg></div>";
var persianVideoAdvertiseBox = "<div class='persian-video-advertise-box' id='__AdvertiseBox__'><iframe src='__AdvertiseIFrame__'></iframe></div>";
var persianVideoControllerBox = "<style>#__SeekId__::-webkit-slider-thumb{background:__SeekColor__;}#__SeekId__::-moz-range-thumb{background:__SeekColor__;}" +
    "#__VolId__::-webkit-slider-thumb{background:__VolSeekColor__;}#__VolId__::-moz-range-thumb{background:__VolSeekColor__;}</style>" +
    "<div id='__ControllerId__' class='persian-video-controller-box'><table id='__ControllerTable__'><tr>" +
    "<td width='5%'><button id='__Play__' class='btn-video-controller btn-video-controller-play' onclick='PlayVideo(this)'></button></td>" +
    "<td width='10%'><div class='timer-video-controller' id='__Timer__'>00:00 / 00:00</div></td>" +
    "<td><input type='range' class='video-controller-seekbar' onchange='SeekVideo(this)' id='__SeekId__' value='0' /></td>" +
    "<td width='5%' style='text-align:center'><button class='btn-video-controller btn-video-controller-unmute' id='__Mute__' onclick='MuteAudio(this)'></button></td>" +
    "<td width='10%'><input type='range' min='0' max='100' class='video-controller-volbar' onchange='VolAudio(this)' id='__VolId__' value='100' /></td>" +
    "<td width='5%'><button class='btn-video-controller btn-video-controller-go-fullscreen' id='__FullScreen__' onclick='FullScreen(this)'></button></td>" +
    "</tr></table></div>";

var _defaultOptions = {
    padding: "5px",
    backgroundColor: "#111",
    borderRadius: "5px",
    volumeBackground: "#D1D1D1",
    volumeColor: "#4BAD4F",
    seekBackground: "#D1D1D1",
    seekColor: "#4BAD4F",
    playButton: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDMxMDlDMTQ0NDlGMTFFODg3Nzg5MEVEMTVCMUNCNTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDMxMDlDMTM0NDlGMTFFODg3Nzg5MEVEMTVCMUNCNTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjAzQjI5RjQ0MTQwMTFFOEE1QjE5REY0OTEyNUMwRUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjAzQjI5RjU0MTQwMTFFOEE1QjE5REY0OTEyNUMwRUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4UuHORAAACkElEQVR42uyaS0hVQRjHx+xFENUyg2iVti3bRg/duIwo2kQQvfZZWBEiRZmbW4JgRdCyFy2lFwZWmkHgKloUbaxFVERh9KDT7+POUIiajddzZu43f/gheL0zzI85M98cpybLMqM5NUlAEpAEJAFJQBKQBCQBHlkDm+A59EdrQAR4sBE+Zn/SB42ebRWKzwyohWFYO+73X6EEnfCpmh+BZfDS/pwoL+A43IhBwByP78jA503xeT1ct9RXo4DaaX5vGzyBwzC/mgT8T5bYNeEhNGkU4LIe7sIFqNMowGWv3UH2yQKsUYBkBfTCHWjUKMBF1oQBODvFllrVAiQLoRUG7a6hTsD42uEmNGgU4LLVzoYjsECjAMlSOAOPoFmjAJd1cBsu2Z1DnQBja4U98NTWDuoEuCy3tcO9StcOsQhw2WLXhq5K1Q6xCTD2ZHkIhmC7RgEuq+GqrR1WaRTwd+3wGDZoFeAWycuwWKsAyUpbRKkVcA1GtQq4AgfhlzYB8np+J+yGzz4NzI104N/hPJyGDzNpKEYB9+GoKb9bVFUJjmbG7DflV2nDlWo0hhkgC5u8Tu/gaPi20o2HLmDQTvcHs9VBqALewUnogZ+z2VGIAmRPb4fXeXQWkoARFrk2nvO+PDsNQYBcppB/jpQY/FjenRctQC5RnDDle0aFpCgBMuBjcKvo6Ze3AJniJTvlg7hHlKcAWdzaZLELacvJoxR+BbugJbTB+86A6V5skAKmG07B+1BLTR8Bcu7+8Y+/6bcl7FDoBw2fR0DO318m+ewNHIDNMQzeV8A3uDjJiU0uQ/XG9HLB97K0XJTsgB3wDM6Z8nWX6DLT6/KLTAHla0gCok8SkAQkAUlAEpAEKM5vAQYAO0NplXBde8cAAAAASUVORK5CYII=",
    pauseButton: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjEzRTdDQ0Y0NDlGMTFFODk3NEFGQjgxN0VENkE5RUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjEzRTdDQ0U0NDlGMTFFODk3NEFGQjgxN0VENkE5RUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDU3NUUxRjE0NDAyMTFFODk4NDhGNTAyRTM3NDEyM0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDU3NUUxRjI0NDAyMTFFODk4NDhGNTAyRTM3NDEyM0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Lh5vYAAACf0lEQVR42uybv2sTYRjHn0tMstglbYUMHbpZMqgUh2KHir8CqUoLaeeOBeni4GL/AYsdhdKhgog6CFa0g1jEQWvp0lJQabUVQYcSf0RSkKo9vw93gUtM7g48wuWe54EPNLwvl3s+ub5378Nzhmma5BKHQR4cB13AoNaJIlgHj8ArUDdRo4GAo+AKOAPaqbVjF6yAKbDgR8BVmxRFL26BS+BHIwE3wDhFO56BIVDiDzHHwKSA5DlOgrlK7pUroNdeKA6QnBgDNysC7oNhkhXveLFnAVn8sQTaSF5cjNn3eYnJc+RYQB/JjSwLyAgWkGEB+4IFJGIkO0zpAkgFqAAVoAJUgOQIevv7GTwmq+LilMsPWx3gPEh7HOMnuAu2qLoGydvWpL2fPxFGARvgHPjgMucIeAIONRjfA6Pgocsx4uAOKITtX+C2R/Icax7JvfYY5/hDVukudGvAd5/zii5jZZ/HKIdRQCyAeUazz1tvgypABagAFaACVIAKUAEqQAWoABWgAlTAf4UZwDwz4O9qqoCEz3lJl7FUs887SAHcaRL3mMOdKGddxnvIKpx6RSGokw6yKjxAVkFzlqz6YG1ZnCvBEyDrcoyD4AG4Bt7Sv2VxvkK4tB5YOx83Sb0kuW0y23oXUAEqQAWoABWgAmQLkCzB4OR3BAsosYBVwQI2WcBT8EuogOe8GeIdIb9J1S/t8if7fYHf4LrAX38GfHK+N3gPjAhJ/o1dAig5BaTt9eBYxJP/Ak5XFn/nM8BXMAgWI5w8V5nyzjtf7UMQd3rmwGXwMUKJc4lumqwO0+WqJyGX1+e5tfUCOAW6QSd5Fz3DFN/Iatx8AebB+3qT/gowADG2g/XOvhPCAAAAAElFTkSuQmCC",
    muteButton: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjVCNkM3RDE0NDlGMTFFOEEzNDc4OTdEMjc3ODIwMUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjVCNkM3RDA0NDlGMTFFOEEzNDc4OTdEMjc3ODIwMUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTNBRTVBMEI0MTQwMTFFODk0NkRCQ0RGMzRGREFFNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTNBRTVBMEM0MTQwMTFFODk0NkRCQ0RGMzRGREFFNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6pzCwZAAAF0ElEQVR42uxb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",
    unmuteButton: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDhGQkUzQjM0NDlGMTFFODlEQkI4MzcxMUQzMkM5OEYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDhGQkUzQjI0NDlGMTFFODlEQkI4MzcxMUQzMkM5OEYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTcyOUMwM0E0MTQwMTFFOEFDQzhGQzRBRjU2QTlGMzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTcyOUMwM0I0MTQwMTFFOEFDQzhGQzRBRjU2QTlGMzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7exVzBAAALSUlEQVR42uxb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",
    fullscreenButton: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZEMkJGNjQ0NDQ5RjExRTg5ODlCRTVCODRENDhFQzg0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZEMkJGNjQ1NDQ5RjExRTg5ODlCRTVCODRENDhFQzg0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkQyQkY2NDI0NDlGMTFFODk4OUJFNUI4NEQ0OEVDODQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkQyQkY2NDM0NDlGMTFFODk4OUJFNUI4NEQ0OEVDODQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7u39+AAAAGnklEQVR42uyb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",
    advertiseIFrame: "",
    advertiseTimeSeconds: 0,
    advertiseEnable: false
};
//endregion

function PersianPlayer(id, options) {


    if (document.getElementById(id) == undefined) {
        return;
    }

    if (options == undefined) {
        options = _defaultOptions;
    } else {
        if (options.padding == undefined) {
            options.padding = _defaultOptions.padding;
        }
        if (options.backgroundColor == undefined) {
            options.backgroundColor = _defaultOptions.backgroundColor;
        }
        if (options.borderRadius == undefined) {
            options.borderRadius = _defaultOptions.borderRadius;
        }
        if (options.volumeBackground == undefined) {
            options.volumeBackground = _defaultOptions.volumeBackground;
        }
        if (options.volumeColor == undefined) {
            options.volumeColor = _defaultOptions.volumeColor;
        }
        if (options.seekBackground == undefined) {
            options.seekBackground = _defaultOptions.seekBackground;
        }
        if (options.seekColor == undefined) {
            options.seekColor = _defaultOptions.seekColor;
        }
        if (options.playButton == undefined) {
            options.playButton = _defaultOptions.playButton;
        }
        if (options.pauseButton == undefined) {
            options.pauseButton = _defaultOptions.pauseButton;
        }
        if (options.muteButton == undefined) {
            options.muteButton = _defaultOptions.muteButton;
        }
        if (options.unmuteButton == undefined) {
            options.unmuteButton = _defaultOptions.unmuteButton;
        }
        if (options.fullscreenButton == undefined) {
            options.fullscreenButton = _defaultOptions.fullscreenButton;
        }
        if (options.advertiseIFrame == undefined) {
            options.advertiseIFrame = _defaultOptions.advertiseIFrame;
        }
        if (options.advertiseTimeSeconds == undefined) {
            options.advertiseTimeSeconds = _defaultOptions.advertiseTimeSeconds;
        }
        if (options.advertiseEnable == undefined) {
            options.advertiseEnable = _defaultOptions.advertiseEnable;
        }
    }

    var videoId = id;
    var videoEle = document.getElementById(videoId);

    persianVideoIds.push(id);
    persianVideoOptions.push(options);

    if (videoEle.parentElement != undefined) {
        var tmpBox = persianVideoControllerBox;
        tmpBox = tmpBox.replace("__ControllerId__", videoId + "_Controller");
        tmpBox = tmpBox.replace(/__SeekId__/g, videoId + "_Seek");
        tmpBox = tmpBox.replace("__Timer__", videoId + "_Timer");
        tmpBox = tmpBox.replace(/__VolId__/g, videoId + "_Volume");
        tmpBox = tmpBox.replace("__Mute__", videoId + "_Mute");
        tmpBox = tmpBox.replace("__Play__", videoId + "_Play");
        tmpBox = tmpBox.replace("__FullScreen__", videoId + "_FullScreen");
        tmpBox = tmpBox.replace("__ControllerTable__", videoId + "_ControllerTable");
        tmpBox = tmpBox.replace(/__SeekColor__/g, options.seekColor);
        tmpBox = tmpBox.replace(/__VolSeekColor__/g, options.volumeColor);
        $(videoEle.parentElement).append(tmpBox);
        tmpBox = persianVideoLoadingBox.replace("__Loading__", videoId + "_Loading")
        $(videoEle.parentElement).append(tmpBox);

        if (options.advertiseEnable) {
            tmpBox = persianVideoAdvertiseBox.replace("__AdvertiseBox__", videoId + "_AdvertiseBox");
            tmpBox = tmpBox.replace("__AdvertiseIFrame__", options.advertiseIFrame);
            $(videoEle.parentElement).append(tmpBox);
        }
    }

    var seekId = id + "_Seek";
    var seekEle = document.getElementById(seekId);

    var minPointer = 0;
    var maxPointer = 0;
    var durationHour = 0;
    var durationMin = 0;
    var durationSecond = 0;

    videoEle.addEventListener('loadedmetadata', function () {
        maxPointer = videoEle.duration;
        seekEle.max = maxPointer;
        seekEle.min = minPointer;

        durationHour = Math.floor(maxPointer / 3600);
        durationMin = Math.floor(maxPointer / 60);
        durationSecond = Math.floor(maxPointer % 60);

        $("#" + videoId + "_Loading").fadeOut('slow');
    });

    var timerId = id + "_Timer";
    var timerEle = document.getElementById(timerId);

    videoEle.ontimeupdate = function () {
        var tm = videoEle.currentTime;
        seekEle.value = tm;
        var tmHour = Math.floor(tm / 3600);
        var tmMin = Math.floor(tm / 60);
        var tmSec = Math.floor(tm % 60);
        timerEle.innerHTML = (tmHour > 0 ? (tmHour + ":") : "") + (tmMin < 10 ? ('0' + tmMin) : tmMin)
            + ":" + (tmSec < 10 ? ('0' + tmSec) : tmSec) +
            " / " +
            (durationHour > 0 ? (durationHour + ":") : "") + (durationMin < 10 ? ('0' + durationMin) : durationMin)
            + ":" + (durationSecond < 10 ? ('0' + durationSecond) : durationSecond)
            ;
    }
    var controllerEle = document.getElementById(videoId + "_Controller");

    var offsetX = $(videoEle).offset().left;
    var offsetY = $(videoEle).offset().top;
    var offsetWidth = $(videoEle).width();
    var offsetHeight = $(videoEle).height();
    var padding = options.padding.replace("px", "");
    $(controllerEle).css("left", $(controllerEle).offset().left - offsetX + "px").css("bottom", "10px")
        .css("width", parseInt(offsetWidth) + (parseInt(padding) * 2) - 4 + "px").css("border-radius", "0 0 " + options.borderRadius + " " + options.borderRadius);

    $(videoEle).css("background-color", options.backgroundColor).css("padding", options.padding).css("border-radius", options.borderRadius + " " + options.borderRadius + " 0 0");


    $("#" + videoId + "_Loading").css({ "width": parseInt(offsetWidth) + (parseInt(padding) * 2) - 4, "height": offsetHeight, "left": offsetX, "top": offsetY, "padding-top": (offsetY / 2) + 16 }).css("border-radius", options.borderRadius + " " + options.borderRadius + " 0 0");


    if (options.advertiseEnable) {
        $("#" + videoId + "_AdvertiseBox").css({ "width": parseInt(offsetWidth) + (parseInt(padding) * 2) - 4, "height": offsetHeight, "left": offsetX, "top": offsetY }).css("border-radius", options.borderRadius + " " + options.borderRadius + " 0 0");
        $("#" + videoId + "_AdvertiseBox iframe").css({ "width": parseInt(offsetWidth) + (parseInt(padding) * 2) - 4, "height": offsetHeight, "left": offsetX, "top": offsetY }).css("border-radius", options.borderRadius + " " + options.borderRadius + " 0 0");
    }

    //region change styles
    $("#" + videoId + "_Play").css("background-image", "url('" + options.playButton + "')");
    $("#" + videoId + "_Controller").css("background-color", options.backgroundColor);
    $("#" + videoId + "_Seek").css("background-color", options.seekBackground);
    $("#" + videoId + "_Volume").css("background-color", options.volumeBackground);

    //endregion

}

function SeekVideo(e) {

    var videoId = e.id.replace("_Seek", "");
    var videoEle = document.getElementById(videoId);
    videoEle.currentTime = e.value;
}

function PlayVideo(e) {

    var videoId = e.id.replace("_Play", "");
    var videoEle = document.getElementById(videoId);
    var options = GetOptions(videoId);

    if (options.advertiseEnable) {
        var advBox = document.getElementById(videoId + "_AdvertiseBox");
        if (advBox != undefined) {
            $(advBox).slideDown('slow').delay(options.advertiseTimeSeconds * 1000).queue(function () {

                doPlay(e); $(advBox).remove();
            });
            return;
        }
    }
    doPlay(e);
}
function doPlay(e) {

    var videoId = e.id.replace("_Play", "");
    var videoEle = document.getElementById(videoId);
    var options = GetOptions(videoId);


    if (videoEle.paused) {
        videoEle.play();
        $(e).removeClass("btn-video-controller-play").addClass("btn-video-controller-pause");
        $(e).css("background-image", "url('" + options.pauseButton + "')");
    }
    else {
        videoEle.pause();
        $(e).removeClass("btn-video-controller-pause").addClass("btn-video-controller-play");
        $(e).css("background-image", "url('" + options.playButton + "')");
    }
}

function MuteAudio(e) {

    var volId = e.id.replace("_Mute", "_Volume");
    var volEle = document.getElementById(volId);
    var videoId = e.id.replace("_Mute", "");
    var videoEle = document.getElementById(videoId);
    if (videoEle.muted) {
        videoEle.muted = false;
        $(e).removeClass("btn-video-controller-mute").addClass("btn-video-controller-unmute");
        volEle.value = 100;
    } else {
        videoEle.muted = true;
        $(e).removeClass("btn-video-controller-unmute").addClass("btn-video-controller-mute");
        volEle.value = 0;
    }
}
function VolAudio(e) {

    var videoId = e.id.replace("_Volume", "");
    var videoEle = document.getElementById(videoId);
    var vol = e.value / 100;
    videoEle.volume = vol;
    if (vol == 0) {
        $("#" + videoId + "_Mute").removeClass("btn-video-controller-unmute").addClass("btn-video-controller-mute");
    } else {
        $("#" + videoId + "_Mute").removeClass("btn-video-controller-mute").addClass("btn-video-controller-unmute");
    }
}
function FullScreen(e) {

    var videoId = e.id.replace("_FullScreen", "");
    var videoEle = document.getElementById(videoId);
    var controllerEle = document.getElementById(videoId + "_Controller");

    var options = GetOptions(videoId);
    var padding = parseInt(options.padding.replace("px", ""));
    console.log(padding);
    var controllerTable = document.getElementById(videoId + "_ControllerTable");

    if ($(videoEle).hasClass("persian-video-fullscreen")) {
        $(videoEle).removeClass("persian-video-fullscreen");
        var offsetX = $(videoEle).offset().left;
        var offsetY = $(videoEle).offset().top;
        var offsetWidth = $(videoEle).width();
        var offsetHeight = $(videoEle).height();

        $(controllerEle).css({
            "position": "relative",
            "left": $(videoEle).offset().left - offsetX + "px",
            "bottom": "10px",
            "width": offsetWidth + (parseInt(padding) * 2) - 4 + "px",
            "border-radius": "0 0 5px 5px",
            "opacity": "1"
        });
        $(controllerEle).off("mouseleave");
    } else {
        $(videoEle).addClass("persian-video-fullscreen");
        var offsetX = $(videoEle).offset().left;
        var offsetY = $(videoEle).offset().top;
        var offsetWidth = $(videoEle).width();
        var offsetHeight = $(videoEle).height();
        $(controllerEle).css({
            "position": "fixed",
            "left": "0px",
            "bottom": "0px",
            "width": offsetWidth + (parseInt(padding) * 2) - 4 + "px",
            "border-radius": "0",
            "opacity": "0"
        });
        $(controllerEle).on("mouseenter", function () {
            $(controllerEle).css({
                "opacity": "1"
            });
        });
        $(controllerEle).on("mouseleave", function () {
            $(controllerEle).css({
                "opacity": "0"
            });
        });
    }

    $(controllerTable).css("width", offsetWidth + (parseInt(padding) * 2) - 4 + "px");
    toggleFullScreen(document.body);
}

function GetOptions(videoId) {
    var options = null;
    var vidIndex = persianVideoIds.indexOf(videoId);
    if (vidIndex != undefined && vidIndex >= 0) {
        options = persianVideoOptions[vidIndex];
    }
    return options;
}

function toggleFullScreen(elem) {
    // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}
