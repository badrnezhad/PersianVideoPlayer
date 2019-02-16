/**
 * Persian Video Player
 * By Hossein Badrnezhad
 * Version : 2.0.1
 * Website : http://videoplayer.persiancomputer.net
 * Developer Website : http://hosseinbadrnezhad.ir
 */

//Ids holder
var persianVideoIds = [];
//Options holder
var persianVideoOptions = [];

var _defaultOptions = {
    padding: "5px",
    backgroundColor: "#111",
    borderRadius: "5px",
    volumeBackground: "#D1D1D1",
    volumeColor: "#4BAD4F",
    seekBackground: "#D1D1D1",
    seekColor: "#4BAD4F",
    playButton: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxLjk5OSA0MS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxLjk5OSA0MS45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPHBhdGggZD0iTTM2LjA2OCwyMC4xNzZsLTI5LTIwQzYuNzYxLTAuMDM1LDYuMzYzLTAuMDU3LDYuMDM1LDAuMTE0QzUuNzA2LDAuMjg3LDUuNSwwLjYyNyw1LjUsMC45OTl2NDAgIGMwLDAuMzcyLDAuMjA2LDAuNzEzLDAuNTM1LDAuODg2YzAuMTQ2LDAuMDc2LDAuMzA2LDAuMTE0LDAuNDY1LDAuMTE0YzAuMTk5LDAsMC4zOTctMC4wNiwwLjU2OC0wLjE3N2wyOS0yMCAgYzAuMjcxLTAuMTg3LDAuNDMyLTAuNDk0LDAuNDMyLTAuODIzUzM2LjMzOCwyMC4zNjMsMzYuMDY4LDIwLjE3NnoiIGZpbGw9IiNGRkZGRkYiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==",
    pauseButton: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8cGF0aCBkPSJNMzAsMEMxMy40NTgsMCwwLDEzLjQ1OCwwLDMwczEzLjQ1OCwzMCwzMCwzMHMzMC0xMy40NTgsMzAtMzBTNDYuNTQyLDAsMzAsMHogTTI3LDQ2aC04VjE0aDhWNDZ6IE00MSw0NmgtOFYxNGg4VjQ2eiIgZmlsbD0iI0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K",
    muteButton: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8Zz4KCTxwYXRoIGQ9Ik0yOC40MDQsNy43NThjLTAuOTc1LTAuNTUyLTIuMTMxLTAuNTM0LTMuMDksMC4wNDRjLTAuMDQ2LDAuMDI3LTAuMDksMC4wNTktMC4xMywwLjA5M0wxMS42MzQsMTkuMzU4SDEgICBjLTAuNTUzLDAtMSwwLjQ0Ny0xLDF2MTljMCwwLjI2NiwwLjEwNSwwLjUyLDAuMjkzLDAuNzA3UzAuNzM0LDQwLjM1OCwxLDQwLjM1OGwxMC42MS0wLjAwNWwxMy41NDMsMTIuNDQgICBjMC4wNSwwLjA0NiwwLjEwNCwwLjA4NiwwLjE2MSwwLjEyYzAuNDkyLDAuMjk3LDEuMDM3LDAuNDQ2LDEuNTgyLDAuNDQ2YzAuNTE3LTAuMDAxLDEuMDMzLTAuMTM0LDEuNTA4LTAuNDAyICAgQzI5LjQwMyw1Mi4zOTMsMzAsNTEuMzYzLDMwLDUwLjIwMVYxMC41MTRDMzAsOS4zNTMsMjkuNDAzLDguMzIzLDI4LjQwNCw3Ljc1OHogTTI4LDUwLjIwMWMwLDAuNDMxLTAuMjE3LDAuODEtMC41NzksMS4wMTUgICBjLTAuMTU1LDAuMDg3LTAuNTQ4LDAuMjU1LTEsMC4wMjZMMTMsMzguOTEzdi00LjU1NmMwLTAuNTUzLTAuNDQ3LTEtMS0xcy0xLDAuNDQ3LTEsMXYzLjk5NmwtOSwwLjAwNHYtMTdoOXY0YzAsMC41NTMsMC40NDcsMSwxLDEgICBzMS0wLjQ0NywxLTF2LTQuNTM2bDEzLjQwNS0xMS4zNGMwLjQ2MS0wLjI0MiwwLjg2MS0wLjA3LDEuMDE2LDAuMDE4QzI3Ljc4Myw5LjcwNCwyOCwxMC4wODMsMjgsMTAuNTE0VjUwLjIwMXoiIGZpbGw9IiNGRkZGRkYiLz4KCTxwYXRoIGQ9Ik01Mi4wMjYsMjkuODU4YzAtOC4zNDctNS4zMTYtMTUuNzYtMTMuMjI5LTE4LjQ0N2MtMC41MjItMC4xNzctMS4wOTEsMC4xMDMtMS4yNjksMC42MjYgICBjLTAuMTc3LDAuNTIyLDAuMTAzLDEuMDkxLDAuNjI2LDEuMjY5YzcuMTAxLDIuNDExLDExLjg3Miw5LjA2MywxMS44NzIsMTYuNTUzYzAsNy40ODMtNC43NjIsMTQuMTM2LTExLjg0OSwxNi41NTQgICBjLTAuNTIyLDAuMTc4LTAuODAyLDAuNzQ2LTAuNjIzLDEuMjdjMC4xNDIsMC40MTUsMC41MywwLjY3NywwLjk0NiwwLjY3N2MwLjEwNywwLDAuMjE2LTAuMDE3LDAuMzIzLTAuMDU0ICAgQzQ2LjcyMSw0NS42MTEsNTIuMDI2LDM4LjE5OCw1Mi4wMjYsMjkuODU4eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPHBhdGggZD0iTTQ0LjQ1Myw2LjM3NGMtMC41MDgtMC4yMTMtMS4wOTUsMC4wMjEtMS4zMTIsMC41M0M0Mi45MjYsNy40MTMsNDMuMTYzLDgsNDMuNjcyLDguMjE2QzUyLjM3NiwxMS45MDksNTgsMjAuNDA1LDU4LDI5Ljg1OCAgIGMwLDkuNzc3LTUuODk0LDE4LjM4LTE1LjAxNSwyMS45MTRjLTAuNTE1LDAuMi0wLjc3MSwwLjc3OS0wLjU3MSwxLjI5NGMwLjE1MywwLjM5NiwwLjUzMiwwLjYzOSwwLjkzMywwLjYzOSAgIGMwLjEyLDAsMC4yNDItMC4wMjEsMC4zNjEtMC4wNjdDNTMuNjA1LDQ5LjgwMSw2MCw0MC40NjcsNjAsMjkuODU4QzYwLDE5LjYsNTMuODk3LDEwLjM4Miw0NC40NTMsNi4zNzR6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8cGF0aCBkPSJNNDMuMDI2LDI5Ljg1OGMwLTUuOTcyLTQuMDA5LTExLjMwMi05Ljc0OS0xMi45NjJjLTAuNTMtMC4xNTEtMS4wODQsMC4xNTItMS4yMzgsMC42ODQgICBjLTAuMTUzLDAuNTMsMC4xNTIsMS4wODUsMC42ODQsMS4yMzhjNC44ODksMS40MTMsOC4zMDQsNS45NTMsOC4zMDQsMTEuMDRzLTMuNDE1LDkuNjI3LTguMzA0LDExLjA0ICAgYy0wLjUzMSwwLjE1My0wLjgzNywwLjcwOC0wLjY4NCwxLjIzOGMwLjEyNywwLjQzOCwwLjUyNiwwLjcyMywwLjk2MSwwLjcyM2MwLjA5MiwwLDAuMTg1LTAuMDEzLDAuMjc3LTAuMDM5ICAgQzM5LjAxOCw0MS4xNTksNDMuMDI2LDM1LjgyOSw0My4wMjYsMjkuODU4eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=",
    unmuteButton: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU0IDU0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NCA1NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8Zz4KCTxwYXRoIGQ9Ik00Ni40MTQsMjZsNy4yOTMtNy4yOTNjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNHMtMS4wMjMtMC4zOTEtMS40MTQsMEw0NSwyNC41ODZsLTcuMjkzLTcuMjkzICAgYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0TDQzLjU4NiwyNmwtNy4yOTMsNy4yOTNjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTQgICBDMzYuNDg4LDM0LjkwMiwzNi43NDQsMzUsMzcsMzVzMC41MTItMC4wOTgsMC43MDctMC4yOTNMNDUsMjcuNDE0bDcuMjkzLDcuMjkzQzUyLjQ4OCwzNC45MDIsNTIuNzQ0LDM1LDUzLDM1ICAgczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRMNDYuNDE0LDI2eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPHBhdGggZD0iTTI4LjQwNCw0LjRjLTAuOTc1LTAuNTUyLTIuMTMxLTAuNTM0LTMuMDksMC4wNDRjLTAuMDQ2LDAuMDI3LTAuMDksMC4wNTktMC4xMywwLjA5M0wxMS42MzQsMTZIMWMtMC41NTMsMC0xLDAuNDQ3LTEsMXYxOSAgIGMwLDAuMjY2LDAuMTA1LDAuNTIsMC4yOTMsMC43MDdTMC43MzQsMzcsMSwzN2wxMC42MS0wLjAwNWwxMy41NDMsMTIuNDRjMC4wNSwwLjA0NiwwLjEwNCwwLjA4NiwwLjE2MSwwLjEyICAgYzAuNDkyLDAuMjk3LDEuMDM3LDAuNDQ2LDEuNTgyLDAuNDQ2YzAuNTE3LTAuMDAxLDEuMDMzLTAuMTM0LDEuNTA4LTAuNDAyQzI5LjQwMyw0OS4wMzUsMzAsNDguMDA1LDMwLDQ2Ljg0NFY3LjE1NiAgIEMzMCw1Ljk5NSwyOS40MDMsNC45NjUsMjguNDA0LDQuNHogTTI4LDQ2Ljg0NGMwLDAuNDMxLTAuMjE3LDAuODEtMC41NzksMS4wMTVjLTAuMTU1LDAuMDg3LTAuNTQ4LDAuMjU1LTEsMC4wMjZMMTMsMzUuNTU2VjMxICAgYzAtMC41NTMtMC40NDctMS0xLTFzLTEsMC40NDctMSwxdjMuOTk2TDIsMzVWMThoOXY0YzAsMC41NTMsMC40NDcsMSwxLDFzMS0wLjQ0NywxLTF2LTQuNTM2bDEzLjQwNS0xMS4zNCAgIGMwLjQ2LTAuMjQyLDAuODYtMC4wNywxLjAxNiwwLjAxOEMyNy43ODMsNi4zNDcsMjgsNi43MjUsMjgsNy4xNTZWNDYuODQ0eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=",
    fullscreenButton: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIzLjY1IDIzLjY1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMy42NSAyMy42NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8Zz4KCTxwYXRoIGQ9Ik0wLjU4NywwLjA1N2w2LjUyOSwwLjYyMWMwLDAsMC44NjktMC4wMjcsMC4zODMsMC40NTdDNy4wMTEsMS42MjQsNS44MzMsMi44MDEsNS44MzMsMi44MDEgICBTNi4xMiwzLjA5LDYuNTYzLDMuNTI2YzEuMjU0LDEuMjU4LDMuNTM5LDMuNTQzLDQuNDY5LDQuNDczYzAsMCwwLjMxOCwwLjE4OS0wLjA2NCwwLjU3Yy0wLjM4MywwLjM4Ny0yLjA3MiwyLjA2OC0yLjM0NiwyLjM0NCAgIGMtMC4yNjgsMC4yNzMtMC40NzUsMC4wNTctMC40NzUsMC4wNTdjLTAuOTA0LTAuOTA0LTMuMjctMy4yNjYtNC40ODQtNC40ODJDMy4yNzEsNi4wOTIsMy4wMTUsNS44MzUsMy4wMTUsNS44MzUgICBTMi4wNjcsNi43OCwxLjQ3NCw3LjM3NGMtMC41OSwwLjU5Mi0wLjU4OC0wLjI5OS0wLjU4OC0wLjI5OVMwLjA2MiwxLjIyNSwwLjA2MiwwLjUyQzAuMDYyLDAuMDE2LDAuNTg3LDAuMDU3LDAuNTg3LDAuMDU3eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPHBhdGggZD0iTTIzLjEyMiwyMy42MDhsLTYuNTIzLTAuNjIxYzAsMC0wLjg3MSwwLjAyNS0wLjM4Ny0wLjQ2MWMwLjQ4Ni0wLjQ4NCwxLjY2Ni0xLjY2NiwxLjY2Ni0xLjY2NiAgIHMtMC4yODctMC4yODUtMC43MjctMC43MjNjLTEuMjU2LTEuMjYtMy41NDEtMy41NDMtNC40NzEtNC40NzljMCwwLTAuMzIyLTAuMTgsMC4wNjItMC41NjRzMi4wNy0yLjA3LDIuMzQ2LTIuMzQ0ICAgYzAuMjcxLTAuMjc1LDAuNDc3LTAuMDU5LDAuNDc3LTAuMDU5YzAuOTAyLDAuOTA2LDMuMjcsMy4yNyw0LjQ4Miw0LjQ4MmMwLjM5MywwLjM5NSwwLjY1LDAuNjU0LDAuNjUsMC42NTQgICBzMC45NDktMC45NDcsMS41NDEtMS41NDFjMC41OS0wLjU5MiwwLjU5LDAuMzAxLDAuNTksMC4zMDFzMC44MjIsNS44NTQsMC44MjIsNi41NDlDMjMuNjUxLDIzLjY0NywyMy4xMjIsMjMuNjA4LDIzLjEyMiwyMy42MDh6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8cGF0aCBkPSJNMC4wMDEsMjMuMDk0bDAuNjE1LTYuNTMxYzAsMC0wLjAyMy0wLjg2OSwwLjQ2NS0wLjM4M2MwLjQ4NCwwLjQ4NiwxLjY2NCwxLjY2OCwxLjY2NCwxLjY2OCAgIFMzLjAzLDE3LjU2MSwzLjQ3LDE3LjEyYzEuMjU2LTEuMjU2LDMuNTQxLTMuNTQxLDQuNDc1LTQuNDc1YzAsMCwwLjE4NC0wLjMxNiwwLjU2OCwwLjA2NmMwLjM4MywwLjM4NywyLjA3LDIuMDcyLDIuMzQ0LDIuMzQ2ICAgYzAuMjczLDAuMjcxLDAuMDU1LDAuNDc3LDAuMDU1LDAuNDc3Yy0wLjkwNiwwLjkwNC0zLjI2NiwzLjI3LTQuNDgsNC40ODZjLTAuMzk1LDAuMzkzLTAuNjUyLDAuNjQ4LTAuNjUyLDAuNjQ4ICAgczAuOTQ1LDAuOTQ3LDEuNTM3LDEuNTM3YzAuNTkyLDAuNTk0LTAuMjk3LDAuNTktMC4yOTcsMC41OXMtNS44NSwwLjgyNC02LjU1MSwwLjgyNEMtMC4wNDIsMjMuNjIsMC4wMDEsMjMuMDk0LDAuMDAxLDIzLjA5NHoiIGZpbGw9IiNGRkZGRkYiLz4KCTxwYXRoIGQ9Ik0yMy41NTIsMC41NTdsLTAuNjE1LDYuNTI5YzAsMCwwLjAyMywwLjg2OS0wLjQ2MSwwLjM4M2MtMC40OS0wLjQ5LTEuNjY4LTEuNjY0LTEuNjY4LTEuNjY0ICAgcy0wLjI4NiwwLjI4Ni0wLjcyNSwwLjcyNWMtMS4yNTYsMS4yNTYtMy41NDMsMy41NDEtNC40NzUsNC40NzNjMCwwLTAuMTg0LDAuMzE4LTAuNTY4LTAuMDY2cy0yLjA2OC0yLjA2Ni0yLjM0Ni0yLjM0ICAgYy0wLjI3LTAuMjc5LTAuMDU3LTAuNDgyLTAuMDU3LTAuNDgyYzAuOTA2LTAuOTA0LDMuMjctMy4yNjgsNC40ODQtNC40OGMwLjM5Ni0wLjM5NSwwLjY1LTAuNjUyLDAuNjUtMC42NTIgICBzLTAuOTQzLTAuOTQ1LTEuNTM3LTEuNTM5Yy0wLjU5Mi0wLjU5MiwwLjI5OS0wLjU4NiwwLjI5OS0wLjU4NnM1Ljg0OS0wLjgyOCw2LjU1Mi0wLjgyOEMyMy41OTUsMC4wMywyMy41NTIsMC41NTcsMjMuNTUyLDAuNTU3eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=",
    playImage: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIGQ9Ik0zMCwwQzEzLjQ1OCwwLDAsMTMuNDU4LDAsMzBzMTMuNDU4LDMwLDMwLDMwczMwLTEzLjQ1OCwzMC0zMFM0Ni41NDIsMCwzMCwweiBNNDUuNTYzLDMwLjgyNmwtMjIsMTUgIEMyMy4zOTQsNDUuOTQxLDIzLjE5Nyw0NiwyMyw0NmMtMC4xNiwwLTAuMzIxLTAuMDM4LTAuNDY3LTAuMTE2QzIyLjIwNSw0NS43MTEsMjIsNDUuMzcxLDIyLDQ1VjE1YzAtMC4zNzEsMC4yMDUtMC43MTEsMC41MzMtMC44ODQgIGMwLjMyOC0wLjE3NCwwLjcyNC0wLjE1LDEuMDMxLDAuMDU4bDIyLDE1QzQ1LjgzNiwyOS4zNiw0NiwyOS42NjksNDYsMzBTNDUuODM2LDMwLjY0LDQ1LjU2MywzMC44MjZ6IiBmaWxsPSIjRkZGRkZGIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=",
    pauseImage: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIGQ9Ik0zMCwwQzEzLjQ1OCwwLDAsMTMuNDU4LDAsMzBzMTMuNDU4LDMwLDMwLDMwczMwLTEzLjQ1OCwzMC0zMFM0Ni41NDIsMCwzMCwweiBNMjcsNDZoLThWMTRoOFY0NnogTTQxLDQ2aC04VjE0aDhWNDZ6IiBmaWxsPSIjRkZGRkZGIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=",
    advertiseIFrame: "",
    advertiseTimeSeconds: 0,
    advertiseEnable: false,
    width: '100%',
    watermarkUrl: ""
};

// Constructor
function PersianPlayer(element, options) {
    try {

        if (element == undefined || element == null) return;

        if (options == undefined || options == null) {
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
            if (options.watermarkUrl == undefined) {
                options.watermarkUrl = _defaultOptions.watermarkUrl;
            }
            if (options.playImage == undefined) {
                options.playImage = _defaultOptions.playImage;
            }
            if (options.pauseImage == undefined) {
                options.pauseImage = _defaultOptions.pauseImage;
            }
            if (options.width == undefined) {
                options.width = _defaultOptions.width;
            }
            options.WaitForAdvertise = false;
        }
        //Id Defenetion
        if (element.id == undefined ||
            element.id == null ||
            element.id == "") {
            $(element).attr("id", "video_" + PersianVideoPlayerGuidMaker());
        }
        //Remove Controls
        if ($(element).attr("controls") != undefined &&
            $(element).attr("controls") != null)
            $(element).removeAttr("controls");

        var videoId = element.id;

        persianVideoIds.push(videoId);
        persianVideoOptions.push(options);

        $(element).wrap(PersianVideoPlayerWrapper(videoId));

        var rootId = "VideoWrapper_" + videoId;
        $("#" + rootId).append(PersianVideoPlayerController(videoId));

        var seekId = "Seek_" + videoId;
        var seekEle = document.getElementById(seekId);

        var minPointer = 0;
        var maxPointer = 0;
        var durationHour = 0;
        var durationMin = 0;
        var durationSecond = 0;

        element.addEventListener('loadedmetadata', function () {
            PersianVideoPlayerSyncSeekbarOnStart(element);
        });

        if (element.readyState >= 2) {
            PersianVideoPlayerSyncSeekbarOnStart(element);
        }

        var timerId = "Timer_" + videoId;
        var timerEle = document.getElementById(timerId);

        element.ontimeupdate = function () {
            var tm = element.currentTime;
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

        $(element).click(function () {
            $("#PlayButton_" + element.id).click();
        });

        if (options.advertiseEnable) {
            $("#" + rootId).prepend(PersianVideoPlayerAdvertisement(videoId, options.advertiseIFrame));
            $("#FullScreen_" + videoId).hide();
        }

        $("#" + rootId).prepend(PersianVideoPlayerLoading(videoId));

        //region change styles
        $("#Play_" + videoId).css("background-image", "url('" + options.playButton + "')");
        $("#VideoController_" + videoId).css("background-color", options.backgroundColor);
        $("#Seek_" + videoId).css("background-color", options.seekBackground);
        $("#Vol_" + videoId).css("background-color", options.volumeBackground);
        $("#" + rootId).css("background-color", options.backgroundColor)
            .css("padding", options.padding)
            .css("border-radius", options.borderRadius);
        $("#" + rootId).prepend(PersianVideoPlayerSeekBarStyles(videoId));
        //endregion

        if (options.watermarkUrl != undefined &&
            options.watermarkUrl != null &&
            options.watermarkUrl != "") {
            $("#" + rootId).append(PersianVideoPlayerWatermark(videoId, options.watermarkUrl));
        }

        $(window).on("resize", function (e, videoId) {
            $("*[id*=VideoWrapper_]").each(function () {
                var videoId = this.id.replace("VideoWrapper_", "");
                var videoEle = document.getElementById(videoId);
                if (videoEle.requestFullscreen ||
                    videoEle.mozRequestFullScreen ||
                    videoEle.webkitRequestFullscreen ||
                    videoEle.msRequestFullscreen) {
                    return;
                }
                var options = PersianVideoPlayerGetOptions(videoId);
                var width = options.width;
                if (width != undefined) {
                    $(this).css('width', width);
                }
            });
        });

    } catch (e) {
        console.log(e);
    }
}

//Sync seek bar with video length
function PersianVideoPlayerSyncSeekbarOnStart(element) {

    var seekId = "Seek_" + element.id;
    var seekEle = document.getElementById(seekId);

    var minPointer = 0;
    var maxPointer = 0;
    var durationHour = 0;
    var durationMin = 0;
    var durationSecond = 0;

    maxPointer = element.duration;
    seekEle.max = maxPointer;
    seekEle.min = minPointer;

    durationHour = Math.floor(maxPointer / 3600);
    durationMin = Math.floor(maxPointer / 60);
    durationSecond = Math.floor(maxPointer % 60);

}

//Guid maker helper method
function PersianVideoPlayerGuidMaker() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

//Wrapper creator
function PersianVideoPlayerWrapper(id) {
    //var width = $("#" + id).width();
    var options = PersianVideoPlayerGetOptions(id);
    var width = options.width;
    return "<div id='VideoWrapper_" + id + "' class='persian-video-wrapper-box' style='width:" + width + " !important;'></div>";
}

//Controller creator
function PersianVideoPlayerController(id) {
    var template = "<div id='VideoController_" + id + "' class='persian-video-controller-box' style='width: 100% !important;'>" +
        "       <div class='persian-video-controller-holder' >" +
        "           <div id='PlayButtonHolder_" + id + "' class='controller-holder-play'><button id='PlayButton_" + id + "' class='btn-video-controller btn-video-controller-play' onclick='PersianVideoPlayerPlayVideo(this)'></button></div>" +
        "           <div id='TimerHolder_" + id + "' class='controller-holder-timer'><div class='timer-video-controller' id='Timer_" + id + "'>00:00 / 00:00</div></div>" +
        "           <div id='SeekHolder_" + id + "' class='controller-holder-seek'><input type='range' id='Seek_" + id + "' class='video-controller-seekbar' onchange='PersianVideoPlayerSeekVideo(this)'  value='0' /></div>" +
        "           <div id='MuteHolder_" + id + "' class='controller-holder-mute' style='text-align:center'><button id='Mute_" + id + "' class='btn-video-controller btn-video-controller-unmute'  onclick='PersianVideoPlayerMuteAudio(this)'></button></div>" +
        "           <div id='VolHolder_" + id + "' class='controller-holder-vol'><input type='range' id='Vol_" + id + "' min='0' max='100' class='video-controller-volbar' onchange='PersianVideoPlayerVolAudio(this)' value='100' /></div>" +
        "           <div id='FullScreenHolder_" + id + "' class='controller-holder-fullscreen'><button id='FullScreen_" + id + "' class='btn-video-controller btn-video-controller-go-fullscreen' onclick='PersianVideoPlayerFullScreen(\"" + id + "\")'></button></div>" +
        "       </div>" +
        "</div>";
    return template;
}

//SeekBar Styles
function PersianVideoPlayerSeekBarStyles(id) {
    var options = PersianVideoPlayerGetOptions(id);
    return "<style>#Seek_" + id + "::-webkit-slider-thumb{background:" + options.seekColor + ";}#Seek_" + id + "::-moz-range-thumb{background:" + options.seekColor + ";}" +
        "#Vol_" + id + "::-webkit-slider-thumb{background:" + options.volumeColor + ";}#Vol_" + id + "::-moz-range-thumb{background:" + options.volumeColor + ";}</style>";
}

//Get options by id
function PersianVideoPlayerGetOptions(id) {
    if (id == undefined || id == null) return null;
    var options = null;
    var vidIndex = persianVideoIds.indexOf(id);
    if (vidIndex != undefined && vidIndex >= 0) {
        options = persianVideoOptions[vidIndex];
    }
    return options;
}

//Change options and store
function PersianVideoPlayerChangeOptions(id, newOptions) {
    if (id == undefined || id == null) return null;
    var options = null;
    if (newOptions == undefined || newOptions == null) return;
    var vidIndex = persianVideoIds.indexOf(id);
    if (vidIndex != undefined && vidIndex >= 0) {
        persianVideoOptions[vidIndex] = newOptions;
    }
    return newOptions;
}

//Change seek time event
function PersianVideoPlayerSeekVideo(e) {
    var videoId = e.id.replace("Seek_", "");
    var videoEle = document.getElementById(videoId);
    videoEle.currentTime = e.value;
}

//Prepare to play/pause video
function PersianVideoPlayerPlayVideo(e) {
    var videoId = e.id.replace("PlayButton_", "");
    var videoEle = document.getElementById(videoId);
    var options = PersianVideoPlayerGetOptions(videoId);
    if (options.WaitForAdvertise == true) return;

    if (videoEle.paused) {
        $("#VideoLoading_" + videoId + " img").attr("src", options.playImage);
    } else {
        $("#VideoLoading_" + videoId + " img").attr("src", options.pauseImage);
    }
    $("#VideoLoading_" + videoId).css('display', 'block').animate({ "opacity": "0.8" }, 100);
    $("#VideoLoading_" + videoId + " img").animate({ "width": "100%" }, 100);
    $("#VideoLoading_" + videoId).delay(200).queue(function () {
        $("#VideoLoading_" + videoId).animate({ "opacity": "0" }, 100);
        $("#VideoLoading_" + videoId).css('display', 'none');
        $("#VideoLoading_" + videoId + " img").css("width", "50%");
        $(this).dequeue();
    });

    if (options.advertiseEnable) {
        var tmpImg = new Image();
        tmpImg.src = options.advertiseIFrame;
        var advWidth = 0;
        $(tmpImg).on('load',
            function () {
                advWidth = tmpImg.width;
                if (advWidth > 0) {
                    options.WaitForAdvertise = true;
                    var advBox = document.getElementById("VideoAdvertise_" + videoId);
                    if (advBox != undefined && advBox != null) {
                        var countdownNumberEl = $("#VideoAdvertise_" + videoId + " #countdown-number");
                        var countdown = options.advertiseTimeSeconds + 1;

                        $("#VideoAdvertise_" + videoId + " svg circle")
                            .css("animation",
                            "countdown " + (options.advertiseTimeSeconds + 1) + "s linear infinite forwards");

                        countdownNumberEl.html(countdown);

                        var countdownInterval = setInterval(function () {
                            countdown = countdown - 1;
                            if (countdown < 0)
                                countdown = 0;
                            countdownNumberEl.html(countdown);
                        },
                            1000);

                        $(advBox).slideDown('slow').delay(options.advertiseTimeSeconds * 1000).queue(function () {
                            PersianVideoPlayerDoPlay(e);
                            $(advBox).remove();
                            options.WaitForAdvertise = false;
                            options.advertiseEnable = false;
                            $("#FullScreen_" + videoId).show();
                            clearInterval(countdownInterval);
                        });
                    }
                } else {
                    PersianVideoPlayerDoPlay(e);
                }
            }).error(function () {
                PersianVideoPlayerDoPlay(e);
            });
    }
    else {
        PersianVideoPlayerDoPlay(e);
    }
}

//Start playing/pausing video
function PersianVideoPlayerDoPlay(e) {
    var videoId = e.id.replace("PlayButton_", "");
    var videoEle = document.getElementById(videoId);
    var options = PersianVideoPlayerGetOptions(videoId);

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

//Mute audio event
function PersianVideoPlayerMuteAudio(e) {

    var volId = e.id.replace("Mute_", "Vol_");
    var volEle = document.getElementById(volId);
    var videoId = e.id.replace("Mute_", "");
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

//Volume change event
function PersianVideoPlayerVolAudio(e) {

    var videoId = e.id.replace("Vol_", "");
    var videoEle = document.getElementById(videoId);
    var vol = e.value / 100;
    videoEle.volume = vol;
    if (vol == 0) {
        $("#Mute_" + videoId).removeClass("btn-video-controller-unmute").addClass("btn-video-controller-mute");
    } else {
        $("#Mute_" + videoId).removeClass("btn-video-controller-mute").addClass("btn-video-controller-unmute");
    }
}

//Generate Advertisement Section
function PersianVideoPlayerAdvertisement(id, iframe) {
    if (iframe == undefined || iframe == null || iframe == "") return;
    //var width = $("#" + id).width();
    var options = PersianVideoPlayerGetOptions(id);
    var width = options.width;
    var template = "<div id='VideoAdvertise_" + id + "' class='persian-video-advertise-box'>" +
        "   <div id='VideoAdvertise_" + id + "' class='persian-video-advertise-holder'>" +
        "      <img src='" + iframe + "' width='100%'/>" +
        "   </div>" +
        "   <div id='countdown'>" +
        "       <div id='countdown-number'></div>" +
        "           <svg>" +
        "               <circle r='18' cx='20' cy='20'></circle>" +
        "           </svg>" +
        "       </div>" +
        "   </div>" +
        "</div>";
    return template;
}

//Generate loading for play/pause
function PersianVideoPlayerLoading(id) {
    //var width = $("#" + id).width();
    var options = PersianVideoPlayerGetOptions(id);
    var width = options.width;
    var template = "<div id='VideoLoading_" + id + "' class='persian-video-loading-box' style='width:" + width + "'>" +
        "   <div id='VideoLoading_" + id + "' class='persian-video-loading-holder'>" +
        "       <div class='persian-video-loading-flex'>" +
        "         <img src='" + options.playButton + "' width='50px'/>" +
        "      </div>" +
        "   </div>" +
        "</div>";
    return template;
}

//Full screen event
function PersianVideoPlayerFullScreen(id) {
    if (id == undefined || id == null) return;
    elem = document.getElementById(id);
    if (elem == undefined || elem == null) return;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

//Watermark
function PersianVideoPlayerWatermark(id, url) {
    var options = PersianVideoPlayerGetOptions(id);
    return "<div id='VideoWatermark_" + id + "' class='persian-video-watermark-box'>" +
        "       <div class='persian-video-watermark-holder'>" +
        "           <img src='" + url + "' />" +
        "       </div>" +
        "   </div>";
}
