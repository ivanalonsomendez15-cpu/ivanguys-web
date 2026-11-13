import { L as LitElement, h as html, i as ifDefined } from './_21731fba.js';
import { s as scenes } from "./_3a2cb20e_hi.js";
import { f as play, j as hrefForScene } from './_e1311d95.js';
import { l as loadAnimation, b as buildSafeResize } from './_36ce2a0a.js';
import './_ccf4b423.js';
const sheet = new (window.CSSStyleSheetConstructor || CSSStyleSheet)();
sheet.replaceSync(":host{display:block;font-size:16px}a{text-decoration:none;position:relative;user-select:none;width:100%;min-height:100%;display:block}a::before{content:\"\";display:block;padding-bottom:var(--ratio, 0%)}a:focus{outline:none}a:focus:focus-visible{box-shadow:0 0 12px 4px #fff;border-radius:var(--radius, 16px)}a:focus main::before{opacity:1}a:hover main{transform:translateY(-4px);box-shadow:0 6px 12px rgba(0,0,0,.3)}a.locked{pointer-events:none;cursor:default}main{pointer-events:none;background:var(--color, #2a57ad);border-radius:var(--radius, 16px);position:absolute;top:0;left:0;width:100%;height:100%;box-shadow:0 2px 8px rgba(0,0,0,.3);overflow:hidden;text-align:center;display:flex;flex-flow:column;align-items:center;justify-content:center;will-change:transform;transform:translate(0);transition:transform .16s,box-shadow .16s}main::before,main::after{content:\"\";position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px}main::before{border-radius:inherit;border:3px solid rgba(0,0,0,.33);opacity:0}main::after{z-index:100;opacity:.9;background:transparent no-repeat center/cover}.locked main::after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjU3Ljk4Mzc2NjklIiB5MT0iNS45MDYwNTY4OSUiIHgyPSItMTUuNjMyOTI5MiUiIHkyPSIxMTguMzg3MTUxJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkYiIG9mZnNldD0iMS4xNzU4NiUiLz48c3RvcCBzdG9wLWNvbG9yPSIjODBERUVBIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNjguOTc5OTEwMiUiIHkxPSIxMi4wNDc1ODIlIiB4Mj0iMjcuMjI0NjIyJSIgeTI9Ijk1LjM4NTA3NDglIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgb2Zmc2V0PSIxLjE3NTg2JSIvPjxzdG9wIHN0b3AtY29sb3I9IiM4MERFRUEiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI1MC4zNjIwODQ4JSIgeTE9IjQyLjU4NTQ3NTQlIiB4Mj0iNDkuNTA2ODc1OCUiIHkyPSI2MC42NDIyNDU2JSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkYiIG9mZnNldD0iMS4xNzU4NiUiLz48c3RvcCBzdG9wLWNvbG9yPSIjODBERUVBIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iODAuMjQzODkxJSIgeTE9IjM5LjA3MTk5MjElIiB4Mj0iMzkuNDc3ODU5JSIgeTI9Ijg1LjE1MTQwMTYlIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgb2Zmc2V0PSIxLjE3NTg2JSIvPjxzdG9wIHN0b3AtY29sb3I9IiM4MERFRUEiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZmlsbD0iIzlGQ0VGRiIgZD0iTTAgMGg0MDB2MjAwSDB6Ii8+PGcgb3BhY2l0eT0iLjYiPjxwYXRoIGQ9Ik0xMDYuNjQyOSAxMDEuNjM3YzQuNjE3OSAyLjY2NiAxMjYuNTkzMSA3MC41NTQgMTI2LjU5MzEgNzAuNTU0bDQ3Ljg1NSAxMjIuODczTDAgMjAwdi03Ni4xNzMzNUwxMDYuNjQyOSAxMDEuNjM3eiIgZmlsbD0iIzI5QjZGNiIvPjxwYXRoIGZpbGw9IiM4MERFRUEiIGQ9Ik0yNjkuOTE1IDUxLjg1MzNsMTYxLjgxOTM3NS0xNy4xOTcwNUw0NjUuMTExMzI4IDIwMCAyNzIuMDY2IDEzNi4zODlNMjA0LjAwNSAxMy43OTk5bC00OS44NTg3LTc3LjMxMzZMMjIuODU1OC0xMS4xMTVsMTA2LjY0ODEgNjUuMTk0OCIvPjxwYXRoIGZpbGw9IiM4MUQ0RkEiIGQ9Ik0yMDEuNTAxIDE3OGw0Ni4wODIgNzQuOTczIDEzMy4wNDQtNTYuMTA2LTEwNy44MDItNjIuMjM5eiIvPjxwYXRoIGQ9Ik02MjguODIyIDI5Mi4yNDcyOWMtLjUxODUxMS0uMzAwNTU3LTIuMzc0MTM0LS42ODI5MTItNi4wODM0OC0xLjQ1MTQyNUM1ODQuMDA3ODUgMjgzLjU1Nzc2NyAzNzIuODIyIDI1OC41ODMgMzcyLjgyMiAyNTguNTgzbDE0Ni4xNjQ5NzMgMjIzIiBmaWxsPSJ1cmwoI2EpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTggLTEyMikiLz48cGF0aCBmaWxsPSIjODFENEZBIiBkPSJNMTMyLjUyMiAxMzcuNjExbC0xNTcuMDYxMDYyNS0xMy43ODQzNUwyMC42NTc4LTcuMzA5NGwxMDkuNzk3NCA1OS43NCIvPjxwYXRoIGZpbGw9IiM4MERFRUEiIGQ9Ik0yNzMuNzY5IDUyLjc4NjRsLjAyMiA4My42ODA2LTcyLjMyMyA0MS41NDktNzIuNTAxNS00MS44NTktLjE3ODQtODMuNDA3OSA3Mi40Nzk5LTQxLjgyMTR6Ii8+PHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTM3MS43NjkgMTc0Ljc4NjRsLjAyMiA4My42ODA2LTcyLjMyMyA0MS41NDktNzIuNTAxNS00MS44NTktLjE3ODQtODMuNDA3OSA3Mi40Nzk5LTQxLjgyMTR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTggLTEyMikiLz48cGF0aCBmaWxsPSJ1cmwoI2MpIiBkPSJNMjYzLjA5NzIgNjguMDk5MWwzNS45ODg4IDY0LjcyMyA3Mi40NDkgNDEuODI4NSAxMjkuMDQ4IDE2Ljc2MDQgMTcuOTIyODU5LTExNi4wMTA2MDk0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk4IC0xMjIpIi8+PHBhdGggZD0iTTkyLjgwNzcxOC4xODgyYy40Mzk3NDc4LjI1MzQ3ODQzIDEzMi42ODM2ODIgMTczIDEzMi42ODM2ODIgMTczbC0yMjUtMTMuMzgwMjcxTDkyLjgwNzcxOC4xODgyeiIgZmlsbD0idXJsKCNkKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk4IC0xMjIpIi8+PC9nPjwvZz48L3N2Zz4=)}.locked main.ice-1::after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iNDIuNTg4Mjg1MSUiIHgyPSIxMDcuNzg0ODElIiB5Mj0iNDIuNTg4Mjg1MSUiIGlkPSJiIj48c3RvcCBzdG9wLWNvbG9yPSIjOEVEN0Y0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0I5RTJGQiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iNDkuOTk5OTI3NCUiIHgyPSIxMDAlIiB5Mj0iNDkuOTk5OTI3NCUiIGlkPSJjIj48c3RvcCBzdG9wLWNvbG9yPSIjOEVEN0Y0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0I5RTJGQiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iNDQuMjE3NjgxNSUiIHgyPSIxMDAlIiB5Mj0iNDQuMjE3NjgxNSUiIGlkPSJkIj48c3RvcCBzdG9wLWNvbG9yPSIjOEVEN0Y0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0I5RTJGQiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9Ii0yMy45MTE3NzA0JSIgeTE9IjQzLjk4ODYwODIlIiB4Mj0iMTAwJSIgeTI9IjQzLjk4ODYwODIlIiBpZD0iZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0M2RTlGRiIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM4REQyRkMiIG9mZnNldD0iOTkuOTklIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0I5RTJGQiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iNDUuMTI1MzQ1NSUiIHgyPSI5NS42NTE0MjIxJSIgeTI9IjQ1LjEyNTM0NTUlIiBpZD0iZiI+PHN0b3Agc3RvcC1jb2xvcj0iI0QwRThGRiIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM5Q0RCRjciIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI4OS4wNDM0OSUiIHkxPSIxMTMuNzE2MDgyJSIgeDI9Ii0xMTguMDY5NDkzJSIgeTI9Ii02Ny42OTc0ODYyJSIgaWQ9ImciPjxzdG9wIHN0b3AtY29sb3I9IiNGRkYiIG9mZnNldD0iMS4xNzU4NiUiLz48c3RvcCBzdG9wLWNvbG9yPSIjODBERUVBIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iLTIuODMwNTM0MzUlIiB5MT0iLTExLjc3MzUzNiUiIHgyPSIyNjIuNDczMjgyJSIgeTI9IjEyOC45Mjc5NDklIiBpZD0iaCI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgb2Zmc2V0PSIxLjE3NTg2JSIvPjxzdG9wIHN0b3AtY29sb3I9IiM4MERFRUEiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGN4PSIxNS4xMDYyMDk3JSIgY3k9IjU4Ljk5OTc3MTglIiBmeD0iMTUuMTA2MjA5NyUiIGZ5PSI1OC45OTk3NzE4JSIgcj0iOTMuOTM3MTUzMSUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjkwMzg3IC0uMjQyNjUgLjIyNjA4IC45NzAxMSAtLjExODg2NiAuMDU0Mjg3NTYpIiBpZD0iYSI+PHN0b3Agc3RvcC1jb2xvcj0iI0E1REVGRiIgb2Zmc2V0PSI5LjI0MDYyJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM1RkMxRkEiIG9mZnNldD0iNDIuMjc2JSIvPjxzdG9wIHN0b3AtY29sb3I9IiNEN0YwRkYiIG9mZnNldD0iMTAwJSIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+PHJlY3QgZmlsbD0iIzlGQ0VGRiIgeD0iOTgiIHdpZHRoPSIyMDMiIGhlaWdodD0iMjAwIiByeD0iMzAiLz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMTEwLjI3MTMtODYuNjA0OUwwIDkwLjY0MDYyNVYyMjkuMzQ1NWwxMzIuMTY4MSA2MS4zNDc1SDI5NS44NTlsMTA5LjA4OS03NC4zNjY4MjhWODAuODUxTDMwNS41ODYtODYuNjA0OXoiLz48cGF0aCBmaWxsPSJ1cmwoI2IpIiBkPSJNMjM5LjU3MyAyMi40OTA1bDY2LjAwOS0xMDkuMDg5NEw0MDAgMGw0Ljk0OCAxMTMuNzI5NDkyTDI3NiA5NHoiLz48cGF0aCBkPSJNMTU0LjgwNjIgODAuODU0VjI2LjY1NjZTMTEwLjEyNC05Mi4wNTczIDEwOS40MjkyLTg5Ljk3MjhDMTA5LjQyOTItODguODg4OTUyIDIzLjk5MTI3NTMtNDcuMTczMTc3NiAwIDBjLTIyLjE0OTcwNzIgNDMuNTUyMTY4NyAwIDk0LjI0NTEgMCA5NC4yNDUxTDE1NC44MDYyIDgwLjg1NHoiIGZpbGw9InVybCgjYykiLz48cGF0aCBmaWxsPSJ1cmwoI2QpIiBkPSJNMTI4Ljc5OTQgMjkwLjY5MkgyOTUuODY0bDg2Ljg1NS03NS4wNDItMTc1LjcxOC00Ny42NTF6Ii8+PHBhdGggZmlsbD0idXJsKCNlKSIgZD0iTTI5My41IDE5NmwzMS41NjUgNjUuNjkzTDQyMCAxODguODYwMzUyIDI1MC41IDEzOS41IDIwNyAxNjh6Ii8+PHBhdGggZmlsbD0idXJsKCNmKSIgZD0iTTEyNS42MjggODQuMzMxTDE0My45OTkxIDE0Nmw2Mi45OTk5IDIyIDQ4LTI3IDIxLTQ3LTM2LjQxNy03MS41MDk4LTg0Ljc3MDcgNC4xNjg5eiIvPjxwYXRoIGQ9Ik03MS4zOTgwODc3IDI1Ny4xMzQ2NzJjMTEuNjE2MDc2MiAxMS41OTY1NjUgNDMuMTc2Mzc0MyAyNC44NzA3NjUgNDQuNTMxMDAyMyAyMS4yNjAzNjhDMTI5LjI5NjA5NiAyNDAuNTg4MzA4IDE0NC4wMDA1IDE0NS45OTkgMTQ0LjAwMDUgMTQ1Ljk5OWwtMTIxIDYxLjg1MDI3NSIgZmlsbD0idXJsKCNnKSIvPjxwYXRoIGQ9Ik0yNjUuNjUzLTM2LjQ5MDFjLTYuODUzLTUuMDAzLTM2LjI0OSAxLjUzNjgtMzYuNjUyIDMuNDlDMjMzLTExLjk5OTYgMjM5LjUgMjIuNTAwNCAyMzkuNSAyMi41MDA0bDU1LjAwMS0yOC41MDEiIGZpbGw9InVybCgjaCkiLz48L2c+PC9zdmc+)}.locked main.ice-2::after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjM5Ljk2NzA2MTglIiB5MT0iMjEuNzQ2MzA2JSIgeDI9IjEzNS40NDczMDMlIiB5Mj0iOTQuMTcxNzQ4MiUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGIiBvZmZzZXQ9IjEuMTc1ODYlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzgwREVFQSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEyLjA0MTQ5MyUiIHkxPSIzMC4yNjcxOTc4JSIgeDI9Ijk2LjA3NDEyNzElIiB5Mj0iNzMuMDEwMTU4NyUiIGlkPSJiIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGIiBvZmZzZXQ9IjEuMTc1ODYlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzgwREVFQSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjU3LjUyNDQzOTIlIiB5MT0iNTEuNjU5NzUxMiUiIHgyPSI4MC4yOTY1NjM5JSIgeTI9IjU2LjM4NjUwODQlIiBpZD0iYyI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgb2Zmc2V0PSIxLjE3NTg2JSIvPjxzdG9wIHN0b3AtY29sb3I9IiM4MERFRUEiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI0LjQ3NTYwNDI3JSIgeTE9IjQxLjc5MDc0MjMlIiB4Mj0iNjIuNzYwMjM3NiUiIHkyPSI3NC40MzU2NTU5JSIgaWQ9ImQiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkYiIG9mZnNldD0iMS4xNzU4NiUiLz48c3RvcCBzdG9wLWNvbG9yPSIjODBERUVBIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNjEuNzM1NTI4NyUiIHkxPSIzMy4yMzMyOTY0JSIgeDI9IjMxLjg0NDgxMiUiIHkyPSI1OC41ODU4NzQzJSIgaWQ9ImUiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkYiIG9mZnNldD0iMS4xNzU4NiUiLz48c3RvcCBzdG9wLWNvbG9yPSIjODBERUVBIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGZpbGw9IiM5RkNFRkYiIGQ9Ik0wIDBoNDAwdjIwMEgweiIvPjxnIG9wYWNpdHk9Ii42Ij48cGF0aCBkPSJNMjU5LjIzNC0yMy42MTY2NkMzMjcuMjU3IDE1LjY1NjUgMzUwLjY2NyAxMDIuNzQ2IDMxMS40NTcgMTcwLjY2MWMtMjEuNjQ4IDM3LjQ5NC01Ny44ODYgNjEuNTM0LTk3LjY0NiA2OC43NjItMzIuMTEzIDUuOTg1LTY2LjM4MjQuOTc3LTk2Ljg1MS0xNi42MTRDNDguOTM2OSAxODMuNTM2IDI1LjUyNjYgOTYuNDQ2IDY0LjczNyAyOC41MzE0YzEzLjM0MjQ1LTIzLjEwOTcgMzIuMTA5LTQwLjg4NjkgNTMuOTY1Ni01My4xMDcwNCA0Mi4zMjM5LTIzLjY3MDI2IDk1LjQxODQtMjUuMDg2NzYgMTQwLjUzMTQuOTU4OTh6IiBmaWxsPSIjODBERUVBIi8+PHBhdGggZD0iTTI3OC4xNzggNTMuMzAwNGMtMi4zNzMgNC4xMTAzLTY4Ljc1NCAxMTUuMTI0Ni02OC43NTQgMTE1LjEyNDZsMTkzLjk2OTU1NSA4Ny41ODhMNDE0IDMuNjAxNTYyIDI3OC4xNzggNTMuMzAwNHoiIGZpbGw9IiMyOUI2RjYiLz48cGF0aCBmaWxsPSIjODBERUVBIiBkPSJNODkuNzIzMTA4IDg4LjgyOEwtNTMuODA3NiAxMzQuNzM5bDk3LjY0Mzc3NzggMTIxLjI3NEwxNTkuMTkyNCAxNTguNjMiLz48cGF0aCBmaWxsPSIjODFENEZBIiBkPSJNMjM4LjAxOCAxNTguNDc0bC0yLjY4MyA4MS41NDEtMTMxLjk0MTEgMTYuOTg5IDU3LjYyODUtOTguMzcxeiIvPjxwYXRoIGQ9Ik0xMTMuODgzMSAzMzcuMzFjLjE5NzgtLjM0MyAxLjAzNTItMS4wMDEgMi4wNzA0LTIuMDAyIDE0LjY1ODUtMTIuMzE3IDk3LjI1OC03My43NzggOTcuMjU4LTczLjc3OGwtNy4wNDI4IDEyOS4wNjEiIGZpbGw9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01NCAtMTAyKSIvPjxwYXRoIGZpbGw9IiM4MUQ0RkEiIGQ9Ik0yNzQuMzE2IDk0LjQ1N0w0MTIgNy4wODM5ODQgMjk3LjI5NC03Mi44OTk3bC02MC4zOSA5OC4yNjAzIi8+PHBhdGggZmlsbD0iIzgwREVFQSIgZD0iTTEyMi4xODgxIDkxLjM0M2wzOC41OTg3IDY3LjA0MSA3Ny4zNTgyLS4wOTMgMzcuNTY1LTY0LjU0NS0zNy43LTY5LjExNjYtNzcuMjU5Ny0uMDc4MnoiLz48cGF0aCBmaWxsPSJ1cmwoI2IpIiBkPSJNMTc2LjE4OSAxOTMuMzQ0bDM3LjAwMzIgNjguMjAxIDc4LjgyNTgtMS4wNzEgMzcuNjkxLTY0LjcyOC0zNy40NjctNjkuNDUyMy03Ny40OTA4LjI1ODZ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQgLTEwMikiLz48cGF0aCBmaWxsPSJ1cmwoI2MpIiBkPSJNMjE0LjEwODg1NiA1OWwxLjM2NDMgNjguMTUwMi0zOC41NjIxIDY2Ljc5MTJMMCAyODAuMDc4MTI1IDU0IDEwMnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01NCAtMTAyKSIvPjxwYXRoIGQ9Ik0zMDguMDc4Ljk1MjdjLS4xOTguMzQyNS0xNS44MzcgMTI1LjM0MDItMTUuODM3IDEyNS4zNDAybDEwOC4xMjMtNzIuMDU5MUwzMDguMDc4Ljk1Mjd6IiBmaWxsPSJ1cmwoI2QpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQgLTEwMikiLz48cGF0aCBkPSJNNDU2LjEyNDAyMyAzMjIuODAwNzgxYy0uMzQzLS4xOTctMTIuMzE5MzM1LTkuMzQwODItMTIuMzE5MzM1LTkuMzQwODItLjAwMDAwMSAwLTIxLjY5NDIzLTYuNDU1MzItNjUuMDgyNjg4LTE5LjM2NTk2MWwtODYuNzA0LTMzLjYyLTEwLjE3NCA4MS44MzkgODMuNjExIDI2LjIxMyA5MC42NjkwMjMtNDUuNzI1MjE5eiIgZmlsbD0idXJsKCNlKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU0IC0xMDIpIi8+PC9nPjwvZz48L3N2Zz4=)}.asset{width:85%;height:60%;z-index:-1;opacity:0}.asset.loaded{transition:opacity .5s;opacity:1}.asset:not(.background){position:relative}.asset.background{z-index:-10}.asset.background::after{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.33) 70%)}.asset santa-card-player,.asset img{position:absolute;top:0;left:0;width:100%;height:100%}.asset img{object-fit:cover}.text{text-shadow:0 1px 0 #0002;color:#fff;z-index:10000;position:relative}h1{font-family:\"Lobster\";font-size:1.2em;line-height:1em;font-weight:300;letter-spacing:-0.25px;word-wrap:break-word;max-width:100%;padding:.25em;margin:0;box-sizing:border-box}h2{font-family:\"Lobster\";font-weight:normal;font-size:4em;line-height:1em;margin:0}h3{font-family:\"Google Sans\",\"Arial\",sans-serif;font-size:.6em;line-height:1.1em;padding:1em 0 0;text-transform:uppercase;color:#e53a35;margin:0;font-weight:500;letter-spacing:.165em;text-shadow:none}.locked .text{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;flex-flow:column}");
const assetRoot = "/ivanguys-web/nochepolar/st/v2026/img/card/";
const resizePolyfill = class {
  constructor(callback) {
    this._entries = new Set();
    window.addEventListener('resize', () => {
      const all = Array.from(this._entries).map(target => {
        return {
          target
        };
      });
      callback(all);
    });
  }
  observe(target) {
    this._entries.add(target);
  }
  unobserve(target) {
    this._entries.delete(target);
  }
};
const globalResizeObserver = new (window.ResizeObserver || resizePolyfill)(entries => {
  entries.forEach(({
    target
  }) => target.resize());
});
const emptyAnim = {
  getDuration() {
    return 0;
  },
  goToAndStop() {},
  destroy() {}
};
function outExpo(n) {
  return 1.0 === n ? n : 1.0 - Math.pow(2, -10 * n);
}
function invertOutExpo(v) {
  v = v * -1 + 1;
  return Math.log2(v) / -10;
}
class SantaCardPlayerElement extends HTMLElement {
  static get observedAttributes() {
    return ['active', 'scene'];
  }
  constructor() {
    super();
    this._anim = emptyAnim;
    this.resize = () => {};
    this._animationStart = 0.0;
    this._animate = this._animate.bind(this);
  }
  _animate(now) {
    const duration = this._anim.getDuration(false) * 1000;
    const ratio = (now - this._animationStart) / duration;
    if (ratio >= 1.0) {
      this._animationStart = 0.0;
    } else {
      window.requestAnimationFrame(this._animate);
    }
    if (duration) {
      const raw = outExpo(ratio);
      const v = this.active ? raw : 1 - raw;
      const frame = this._anim.getDuration(true) * v;
      this._anim.goToAndStop(Math.max(0, frame), true);
    }
  }
  get active() {
    return this.hasAttribute('active');
  }
  set active(active) {
    this.toggleAttribute('active', active);
  }
  get scene() {
    return this.getAttribute('scene');
  }
  set scene(scene) {
    if (scene) {
      this.setAttribute('scene', scene);
    } else {
      this.removeAttribute('scene');
    }
  }
  _updateActive() {
    if (!this._animationStart) {
      window.requestAnimationFrame(this._animate);
      this._animationStart = performance.now();
    } else {
      const now = performance.now();
      const durationPassed = now - this._animationStart;
      const duration = this._anim.getDuration(false) * 1000;
      const adjustedRatio = outExpo(durationPassed / duration);
      const startAt = invertOutExpo(1 - adjustedRatio);
      this._animationStart = now - startAt * duration;
    }
  }
  _updateAnim() {
    this._anim.destroy();
    if (!this.scene || !this.isConnected) {
      this._anim = emptyAnim;
      this.resize = () => {};
      return;
    }
    const src = assetRoot + this.getAttribute('scene') + '.json';
    const anim = loadAnimation(src, {
      container: this
    });
    this._anim = anim;
    this._anim.addEventListener('DOMLoaded', () => {
      window.requestAnimationFrame(() => {
        if (this._anim === anim) {
          this.dispatchEvent(new CustomEvent('load'));
        }
      });
    });
    this._anim.addEventListener('data_failed', () => {
      if (this._anim === anim) {
        console.warn('got data_failed', this._anim, anim);
        this.dispatchEvent(new CustomEvent('error'));
      }
    });
    this.resize = buildSafeResize(anim);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    switch (attrName) {
      case 'active':
        this._updateActive();
        break;
      case 'scene':
        this._updateAnim();
        break;
    }
  }
  connectedCallback() {
    this._updateAnim();
    globalResizeObserver.observe(this);
  }
  disconnectedCallback() {
    this._updateAnim();
    globalResizeObserver.unobserve(this);
  }
}
customElements.define('santa-card-player', SantaCardPlayerElement);
const scenesWithColor = {
  boatload: '#57c4e9',
  buildandbolt: '#f8c328',
  codeboogie: '#f8c328',
  codelab: '#2a57ad',
  elfmaker: '#3399ff',
  elfski: '#1b69c1',
  glider: '#7f54fa',
  gumball: '#bf8f68',
  havoc: '#587e9c',
  jamband: '#6bb4fd',
  jetpack: '#9d87f5',
  mercator: '#bf8f68',
  penguindash: '#93dae4',
  presentbounce: '#29b6f6',
  presentdrop: '#2c84db',
  racer: '#2a57ad',
  railroad: '#8053fa',
  runner: '#d92626',
  santascanvas: '#1b69c1',
  santasearch: '#e7ad03',
  santaselfie: '#6bb4fd',
  seasonofgiving: '#32a658',
  snowball: '#93dae4',
  snowdodgeball: '#f8c328',
  snowbox: '#1b69c1',
  snowflake: '#d92626',
  speedsketch: '#32a658',
  traditions: '#93dae4',
  translations: '#32a658',
  windtunnel: '#7f54fa',
  wrapbattle: '#2a57ad',
  '@penguinswim': '#079aad',
  '@rocketsleigh': '#9d87f5',
  '@dasherdancer': '#6bb4fd',
  '@snowballrun': '#93dae4',
  '@presenttoss': '#6f00ff',
  '@cityquiz': '#e7ad03'
};
const visibleForRandom = new Set();
const intersectionObserver = window.IntersectionObserver ? new window.IntersectionObserver(entries => {
  entries.forEach(entry => {
    const card = entry.target;
    card._visible = entry.isIntersecting;
    if (entry.isIntersecting && card.effectiveId in scenesWithColor) {
      visibleForRandom.add(card);
    } else {
      visibleForRandom.delete(card);
    }
  });
}, {
  rootMargin: '128px'
}) : null;
window.setInterval(() => {
  let factor = 0.5;
  let card = null;
  for (const cand of visibleForRandom) {
    if (Math.random() > factor) {
      card = cand;
      break;
    }
    factor /= 2;
  }
  if (!card) {
    return;
  }
  card.animate = true;
  window.setTimeout(() => {
    card.animate = false;
  }, Math.random() * 1000 + 1500);
}, 8 * 1000);
class SantaCardElement extends LitElement {
  static get properties() {
    return {
      locked: {
        type: Number,
        reflect: true
      },
      scene: {
        type: String,
        reflect: true
      },
      id: {
        type: String,
        reflect: true
      },
      featured: {
        type: Boolean,
        reflect: true
      },
      animate: {
        type: Boolean
      },
      _visible: {
        type: Boolean
      },
      _active: {
        type: Boolean
      },
      _assetNode: {
        type: Object
      },
      _assetLoaded: {
        type: Boolean
      }
    };
  }
  constructor() {
    super();
    this._visible = !intersectionObserver;
    this._assetNode = '';
    this._assetLoaded = false;
    this._active = false;
    this._maybeDismiss = this._maybeDismiss.bind(this);
    this._maybeMakeActive = this._maybeMakeActive.bind(this);
    this.addEventListener('focus', this._maybeMakeActive);
    this.addEventListener('blur', this._maybeDismiss);
    this.addEventListener('mouseover', this._maybeMakeActive);
    this.addEventListener('mouseout', this._maybeDismiss);
  }
  _buildAsset() {
    const scene = this.effectiveId;
    if (scene in scenesWithColor) {
      const player = Object.assign(document.createElement('santa-card-player'), {
        scene,
        _active: this._active
      });
      player.addEventListener('error', () => {
        player.scene = '_generic';
      }, {
        once: true
      });
      return player;
    }
    const img = document.createElement('img');
    if (!scene) {
      img.src = "/ivanguys-web/nochepolar/st/v2026/img/og.png";
    } else {
      img.src = "/ivanguys-web/nochepolar/st/v2026/img/scenes/" + `${scene}_2x.png`;
      img.srcset = `${img.src} 2x, ${"/ivanguys-web/nochepolar/st/v2026/img/scenes/"}` + `${scene}_1x.png`;
    }
    img.addEventListener('error', () => {
      img.src = "/ivanguys-web/nochepolar/st/v2026/img/unknown.png";
      img.removeAttribute('srcset');
    }, {
      once: true
    });
    return img;
  }
  _refreshAsset() {
    const localNode = this._buildAsset();
    this._assetNode = localNode;
    this._assetLoaded = false;
    localNode.addEventListener('load', () => {
      if (localNode === this._assetNode) {
        this._assetLoaded = true;
      }
    });
  }
  shouldUpdate(changedProperties) {
    const idChanged = changedProperties.has('id') || changedProperties.has('scene');
    if (idChanged) {
      this._assetLoaded = false;
    }
    if (this._visible && !this._assetLoaded) {
      this._refreshAsset();
    }
    if (changedProperties.has('_active') || changedProperties.has('animate')) {
      if (this._assetNode instanceof SantaCardPlayerElement) {
        this._assetNode.active = this._active || this.animate;
      }
    }
    return true;
  }
  connectedCallback() {
    super.connectedCallback();
    intersectionObserver && intersectionObserver.observe(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    intersectionObserver && intersectionObserver.unobserve(this);
  }
  _maybeMakeActive() {
    if (this.locked >= 0 || this._active) {
      return;
    }
    play('menu_over', this.effectiveId);
    this._active = true;
  }
  _maybeDismiss() {
    if (!this._active) {
      return;
    }
    play('menu_out');
    this._active = false;
  }
  static get styles() {
    return [sheet];
  }
  get isLocked() {
    return this.locked != null && this.locked >= 0;
  }
  get effectiveId() {
    return this.scene || this.id || '';
  }
  render() {
    const scene = this.effectiveId;
    const isLocked = this.isLocked;
    const background = this._assetNode instanceof HTMLImageElement;
    const mainStyle = scene in scenesWithColor ? `--color: ${scenesWithColor[scene]}` : '';
    let text = '';
    if (isLocked) {
      text = html`
<svg width="14" height="20" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fill-rule="evenodd"><rect fill="#FFF" fill-rule="nonzero" y="5" width="14" height="14" rx="2.8825"/><path d="M3 7V3.20903294C3 1.43673686 4.55703723 0 6.47774315 0h1.0444629C9.44287133 0 11 1.43672748 11 3.20903294V7" stroke="#FFF" stroke-width="2"/><circle fill="#C4C4C4" fill-rule="nonzero" cx="7" cy="11" r="1.5"/><path fill="#C4C4C4" fill-rule="nonzero" d="M7.83333333 11.5H6.16666667L5.5 14.5h3z"/></g></svg>
<h3>${"\u0926\u093F\u0938\u0902\u092C\u0930"}</h3>
<h2>${this.locked || ''}</h2>
      `;
    } else if (scenes[scene]) {
      text = html`<h1>${scenes[scene]}</h1>`;
    }
    return html`
<a href=${ifDefined(isLocked ? undefined : hrefForScene(scene))} class=${isLocked ? 'locked' : ''}>
  <main class=${isLocked ? `ice-${(this.locked || 0) % 3}` : ''} style=${mainStyle}>
    <div class="asset ${background ? 'background' : ''} ${this._assetLoaded ? 'loaded' : ''}">
      ${this._assetNode}
    </div>
    <div class="text">${text}</div>
  </main>
</a>
    `;
  }
}
customElements.define('santa-card', SantaCardElement);
const safariCheckTime = 5000;
const safariCheckInterval = 250;
function prepareAsset(src, options) {
  const extMatch = /(\.\w+)(|\?.*)$/.exec(src);
  const ext = extMatch && extMatch[1] || null;
  options = Object.assign({
    loop: ext === '.mp4',
    autoplay: true
  }, options);
  let asset;
  const promise = new Promise((resolve, reject) => {
    switch (ext) {
      case '.mp4':
        asset = document.createElement('video');
        asset.loop = options.loop;
        asset.autoplay = options.autoplay;
        asset.muted = true;
        if (navigator.vendor.startsWith('Apple')) {
          let checks = Math.ceil(safariCheckTime / safariCheckInterval);
          const interval = window.setInterval(() => {
            if (--checks <= 0) {
              window.clearInterval(interval);
            }
            if (asset.error) {
              reject(asset.error);
            } else if (isFinite(asset.duration) && asset.duration) {
              resolve(asset);
            } else if (checks <= 0) {
              reject(new Error('Safari timeout'));
            }
          }, safariCheckInterval);
        }
        asset.addEventListener('canplaythrough', () => resolve(asset));
        break;
      case '.mp3':
      case '.ogg':
        asset = document.createElement('audio');
        asset.loop = options.loop;
        asset.autoplay = options.autoplay;
        asset.addEventListener('canplaythrough', () => resolve(asset));
        break;
      default:
        asset = document.createElement('img');
        asset.addEventListener('load', () => resolve(asset));
        break;
    }
    asset.addEventListener('error', reject);
    asset.src = src;
  });
  return {
    promise,
    asset
  };
}
export { prepareAsset as p, scenesWithColor as s };