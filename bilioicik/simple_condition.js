const { Scratch } = window;

const {
    BlockType, ArgumentType, TargetType, Cast,
  } = Scratch;

const simpleconditionpicture = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzc1IiB2aWV3Qm94PSIwLDAsNjAwLDM3NSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSI5Mi43MDM3IiB5MT0iMjAxIiB4Mj0iNDIwIiB5Mj0iMjAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYWIxOSIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZhYjE5IiBzdG9wLW9wYWNpdHk9IjAuOCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxMjQuNzAzNyIgeTE9IjIwOSIgeDI9IjM0MS42NjY2OCIgeTI9IjIwOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmFiMTkiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYWIxOSIgc3RvcC1vcGFjaXR5PSIwLjgiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MCw3LjUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0tNjAsMzY3LjV2LTM3NWg2MDB2Mzc1eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48Zz48Zz48cGF0aCBkPSJNOTIuNzAzNyw3M2MwLC00LjQxODI4IDMuNTgxNzIsLTggOCwtOGgxNmM0LDAgNiwyIDgsNGw4LDhjMiwyIDQsNCA4LDRoMjRjNCwwIDYsLTIgOCwtNGw4LC04YzIsLTIgNCwtNCA4LC00aDIyMy4yOTYzYzQuNDE4MjgsMCA4LDMuNTgxNzIgOCw4djgwYzAsNC40MTgyOCAtMy41ODE3Miw4IC04LDhoLTE5Mi4wOTYzdjBjLTQsMCAtNiwyIC04LDRsLTgsOGMtMiwyIC00LDQgLTgsNGgtMjRjLTQsMCAtNiwtMiAtOCwtNGwtOCwtOGMtMiwtMiAtNCwtNCAtOCwtNGgtMTUuMmMtNC40MTgyOCwwIC04LDMuNTgxNzIgLTgsOHY4MGMwLDQuNDE4MjggMy41ODE3Miw4IDgsOGgyNzkuMjk2M2M0LjQxODI4LDAgOCwzLjU4MTcyIDgsOHY0OGMwLDQuNDE4MjggLTMuNTgxNzIsOCAtOCw4aC0yMjMuMjk2M3YwYy00LDAgLTYsMiAtOCw0bC04LDhjLTIsMiAtNCw0IC04LDRoLTI0Yy00LDAgLTYsLTIgLTgsLTRsLTgsLThjLTIsLTIgLTQsLTQgLTgsLTRoLTE2Yy00LjQxODI4LDAgLTgsLTMuNTgxNzIgLTgsLTh6IiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjY29sb3ItMSkiIHN0cm9rZS13aWR0aD0iMjAiLz48cGF0aCBkPSJNOTIuNzAzNyw3M2MwLC00LjQxODI4IDMuNTgxNzIsLTggOCwtOGgxNmM0LDAgNiwyIDgsNGw4LDhjMiwyIDQsNCA4LDRoMjRjNCwwIDYsLTIgOCwtNGw4LC04YzIsLTIgNCwtNCA4LC00aDIyMy4yOTYzYzQuNDE4MjgsMCA4LDMuNTgxNzIgOCw4djgwYzAsNC40MTgyOCAtMy41ODE3Miw4IC04LDhoLTE5Mi4wOTYzdjBjLTQsMCAtNiwyIC04LDRsLTgsOGMtMiwyIC00LDQgLTgsNGgtMjRjLTQsMCAtNiwtMiAtOCwtNGwtOCwtOGMtMiwtMiAtNCwtNCAtOCwtNGgtMTUuMmMtNC40MTgyOCwwIC04LDMuNTgxNzIgLTgsOHY4MGMwLDQuNDE4MjggMy41ODE3Miw4IDgsOGgyNzkuMjk2M2M0LjQxODI4LDAgOCwzLjU4MTcyIDgsOHY0OGMwLDQuNDE4MjggLTMuNTgxNzIsOCAtOCw4aC0yMjMuMjk2M3YwYy00LDAgLTYsMiAtOCw0bC04LDhjLTIsMiAtNCw0IC04LDRoLTI0Yy00LDAgLTYsLTIgLTgsLTRsLTgsLThjLTIsLTIgLTQsLTQgLTgsLTRoLTE2Yy00LjQxODI4LDAgLTgsLTMuNTgxNzIgLTgsLTh6IiBmaWxsPSIjZmZhYjE5IiBzdHJva2U9IiNjYzg5MTQiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48cGF0aCBkPSJNMTI0LjcwMzcsMTY5YzAsLTQuNDE4MjggMy41ODE3MiwtOCA4LC04aDE2YzQsMCA2LDIgOCw0bDgsOGMyLDIgNCw0IDgsNGgyNGM0LDAgNiwtMiA4LC00bDgsLThjMiwtMiA0LC00IDgsLTRoMTEyLjk2Mjk4YzQuNDE4MjgsMCA4LDMuNTgxNzIgOCw4djgwYzAsNC40MTgyOCAtMy41ODE3Miw4IC04LDhoLTIwMC45NjI5OGMtNC40MTgyOCwwIC04LC0zLjU4MTcyIC04LC04eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTIpIiBzdHJva2Utd2lkdGg9IjIwIi8+PHBhdGggZD0iTTEyNC43MDM3LDE2OWMwLC00LjQxODI4IDMuNTgxNzIsLTggOCwtOGgxNmM0LDAgNiwyIDgsNGw4LDhjMiwyIDQsNCA4LDRoMjRjNCwwIDYsLTIgOCwtNGw4LC04YzIsLTIgNCwtNCA4LC00aDExMi45NjI5OGM0LjQxODI4LDAgOCwzLjU4MTcyIDgsOHY4MGMwLDQuNDE4MjggLTMuNTgxNzIsOCAtOCw4aC0yMDAuOTYyOThjLTQuNDE4MjgsMCAtOCwtMy41ODE3MiAtOCwtOHoiIGZpbGw9IiNmZmFiMTkiIHN0cm9rZT0iI2NjODkxNCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMi4zODI4MSwxMzYuOCkgc2NhbGUoMywzKSIgZm9udC1zaXplPSIxNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiNjYzg5MTQiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IiZxdW90O0Nvb3BlciBCbGFjayZxdW90OywgU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9IjUwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj5zb21ldGhpbmc8L3RzcGFuPjwvdGV4dD48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzguNDY4NzUsMjIzLjIpIHNjYWxlKDMsMykiIGZvbnQtc2l6ZT0iMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjY2M4OTE0IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSImcXVvdDtDb29wZXIgQmxhY2smcXVvdDssIFNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+c2ltcGxlPC90c3Bhbj48L3RleHQ+PHBhdGggZD0iTTM2MS4yMjM5MiwzMTEuNGMtMi4wMjIxNCwwIC0zLjY2MTQyLC0xLjYzOTI3IC0zLjY2MTQyLC0zLjY2MTQydi0zNy42NzcxNmMwLC0yLjAyMjE0IDEuNjM5MjcsLTMuNjYxNDIgMy42NjE0MiwtMy42NjE0MmgzNy42NzcxNmMyLjAyMjE0LDAgMy42NjE0MiwxLjYzOTI3IDMuNjYxNDIsMy42NjE0MnY5LjQxOTI5YzAsLTEuMDExMDcgLTEuMjI5NDYsLTEuODMwNzEgLTIuNzQ2MDcsLTEuODMwNzFoLTI4LjI1Nzg3Yy0xLjUxNjYxLDAgLTIuNzQ2MDYsMC44MTk2NCAtMi43NDYwNiwxLjgzMDcxdjE4LjgzODU4YzAsMS4wMTEwNyAxLjIyOTQ1LDEuODMwNzEgMi43NDYwNiwxLjgzMDcxaDI4LjI1Nzg3YzEuNTE2NjEsMCAyLjc0NjA3LC0wLjgxOTY0IDIuNzQ2MDcsLTEuODMwNzF2OS40MTkyOWMwLDIuMDIyMTQgLTEuNjM5MjcsMy42NjE0MiAtMy42NjE0MiwzLjY2MTQyeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjY2Y4YjE3IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozMDA6MTg3LjUtLT4=";

const simpleconditionicon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCwwLDgwLDgwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjI3NC4wOTQ1MiIgeTE9IjIxNC4wOTQ1MiIgeDI9IjIwNS45MDU0OSIgeTI9IjE0NS45MDU0OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmQ1OGQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmQ1OGQiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDAsLTE0MCkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIyMC4xNjI2LDIyMGMtMTEuMTM1NSwwIC0yMC4xNjI2LC05LjAyNzEgLTIwLjE2MjYsLTIwLjE2MjZ2LTM5LjY3NDhjMCwtMTEuMTM1NSA5LjAyNzEsLTIwLjE2MjYgMjAuMTYyNiwtMjAuMTYyNmgzOS42NzQ4YzExLjEzNTUsMCAyMC4xNjI2LDkuMDI3MSAyMC4xNjI2LDIwLjE2MjZ2MzkuNjc0OGMwLDExLjEzNTUgLTkuMDI3MSwyMC4xNjI2IC0yMC4xNjI2LDIwLjE2MjZ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0idXJsKCNjb2xvci0xKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjIyLjY0MjI5LDIxNS4wMDAwNWMtOS43NDM1NiwwIC0xNy42NDIyNywtNy44OTg3MSAtMTcuNjQyMjcsLTE3LjY0MjI3di0zNC43MTU0NWMwLC05Ljc0MzU2IDcuODk4NzEsLTE3LjY0MjI4IDE3LjY0MjI3LC0xNy42NDIyOGgzNC43MTU0NWM5Ljc0MzU2LDAgMTcuNjQyMjgsNy44OTg3MiAxNy42NDIyOCwxNy42NDIyOHYzNC43MTU0NWMwLDkuNzQzNTYgLTcuODk4NzIsMTcuNjQyMjcgLTE3LjY0MjI4LDE3LjY0MjI3eiIgZmlsbD0iI2ZmYWIxOSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjIxLjE2MTQyLDIwMi41MDAwMmMtMi4wMjIxNCwwIC0zLjY2MTQyLC0xLjYzOTI3IC0zLjY2MTQyLC0zLjY2MTQydi0zNy42NzcxNmMwLC0yLjAyMjE0IDEuNjM5MjcsLTMuNjYxNDIgMy42NjE0MiwtMy42NjE0MmgzNy42NzcxNmMyLjAyMjE0LDAgMy42NjE0MiwxLjYzOTI3IDMuNjYxNDIsMy42NjE0MnY5LjQxOTI5YzAsLTEuMDExMDcgLTEuMjI5NDYsLTEuODMwNzEgLTIuNzQ2MDcsLTEuODMwNzFoLTI4LjI1Nzg3Yy0xLjUxNjYxLDAgLTIuNzQ2MDYsMC44MTk2NCAtMi43NDYwNiwxLjgzMDcxdjE4LjgzODU4YzAsMS4wMTEwNyAxLjIyOTQ1LDEuODMwNzEgMi43NDYwNiwxLjgzMDcxaDI4LjI1Nzg3YzEuNTE2NjEsMCAyLjc0NjA3LC0wLjgxOTY0IDIuNzQ2MDcsLTEuODMwNzF2OS40MTkyOWMwLDIuMDIyMTQgLTEuNjM5MjcsMy42NjE0MiAtMy42NjE0MiwzLjY2MTQyeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjY2Y4YjE3IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo0MC4wMDAwMDAwMDAwMDAwMzo0MC0tPg==";

const simpleconditionextensionId = "simplecondition";

const EXTCONFIGCOMMENTID = '_ExtensionConfig_';

class simplecondition{
    static extCount = 0;
    constructor(runtime) {
        this.runtime = runtime;
        simplecondition.extCount += 1;
        this.id = simplecondition.extCount;
        this.hideExtraBlocks = true;
        this.branchnumber = 2;
        this.branchnewnumber = 2;
        this.branchsurface =["?"]
        if (!this.parseExtConfig()) {
            runtime.on('PROJECTLOADED', () => {
              this.parseExtConfig();
            });
        }
        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                'cnname':'简单条件',
                'simpleconditiondocs':'文档',
                'simpleconditionbranch':'自定义支路数量',
                'simpleconditionbranch?':'更改“亿些支路”中积木支路数量。（目前有bug，刷新后积木无法使用）',
                'simpleconditionshowBlock': '显示不常用积木',
                'simpleconditionhideBlock': '隐藏不常用积木',
                'simpleconditionshowBlock?':'为了避免积木过多，一些不常用积木被隐藏了。\n是否显示隐藏积木？',

                'titleBranch':'一些支路',
                'cnif':'若[a]',
                'cnifnot':'除非[a]',
                'cnelse':'否则',
                'cnwhile':'循环当[a]',
                'cnwhilenot':'循环直到[a]',
                'cniffor':'若[a]循环[b]次',
                'cnelsefor':'否则循环[c]次',
                'cnifforever':'若[a]循环',
                'cnelseforever':'否则循环',
                'cnrepeatwhile':'循环[a]次，若[b]继续',
                'cnrepeatwhilenot':'循环[a]次，若[b]停止',
                'cnrepeatif':'循环[a]次，若[b]',

                'titleBranches':'亿些支路',
                'cnifreference':'执行脚本[a]',
                'cnwhilereference':'循环脚本[a]',

                'titletobecontinued':'未完待续',
                
                'r':'',
            },
            en: {
                'cnname':'simple condition',
                'simpleconditiondocs':'documentation',
                'simpleconditionbranch':'change the number of branches',
                'simpleconditionbranch?':'Input the new number of branches of blocks in "Branches".(It has bug now.The blocks cannot be used next time)',
                'simpleconditionshowBlock': 'show other blocks',
                'simpleconditionhideBlock': 'hide other blocks',
                'simpleconditionshowBlock?':'To avoid clutter, some infrequently used blocks are hidden.\nDo you want to show hidden blocks?',
                
                'titleBranch':'Branch',
                'cnif':'if[a]',
                'cnifnot':'unless[a]',
                'cnelse':'else',
                'cnwhile':'while[a]',
                'cnwhilenot':'repeat until[a]',
                'cniffor':'if[a]repeat[b]',
                'cnelsefor':'else repeat[c]',
                'cnifforever':'if[a]forever',
                'cnelseforever':'else forever',
                'cnrepeatwhile':'repeat[a],if[b]continue',
                'cnrepeatwhilenot':'repeat[a],if[b]break',
                'cnrepeatif':'repeat[a],if[b]',

                'titleBranches':'Branches',
                'cnifreference':'script[a]',
                'cnwhilereference':'repeat script[a]',
                
                'titletobecontinued':'To be continued',

                'r':'',
            }
        })
	}
    formatMessage(id) {
        return this._formatMessage({
            id,
            default: id,
            description: id
        });
    }
    getInfo(){
        return{
            id:simpleconditionextensionId,
            name:this.formatMessage('cnname'),
            blockIconURI:'',
            menuIconURI: simpleconditionicon,
            color1:'#ffab19',
            color2:'#ffd58d',
            blocks:[
                {
                    opcode: 'test',
                    blockType: 'reporter',
                    text:'test',
                    hideFromPalette:1
                },
                {
                    blockType: "button",
                    text: this.formatMessage('simpleconditiondocs'),
                    onClick: this.docs,
                },
                {
                    blockType: 'button',
                    hideFromPalette: !this.hideExtraBlocks,
                    text: this.formatMessage('simpleconditionshowBlock'),
                    onClick: () => {
                      if (confirm(this.formatMessage('simpleconditionshowBlock?'))) {
                        this.hideExtraBlocks = false;
                        this.storeExtConfig();
                        this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                      }
                    },
                },
                {
                    blockType: 'button',
                    text: this.formatMessage('simpleconditionhideBlock'),
                    hideFromPalette: this.hideExtraBlocks,
                    onClick: () => {
                      this.hideExtraBlocks = true;
                      this.storeExtConfig();
                      this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                    },
                },
                '---' + this.formatMessage('titleBranch'),
                {
                    opcode: 'cnif',
                    blockType: 'conditional',
                    branchCount: 1,
                    text:[this.formatMessage('cnif')]
                },
                {
                    opcode: 'cnifnot',
                    blockType: 'conditional',
                    branchCount: 1,
                    text:[this.formatMessage('cnifnot')]
                },
                {
                    opcode: 'cnifelse',
                    blockType: 'conditional',
                    branchCount: 2,
                    text:[this.formatMessage('cnif'),this.formatMessage('cnelse')]
                },
                {
                    opcode: 'cnwhile',
                    blockType: 'conditional',
                    branchCount: 1,
                    text:[this.formatMessage('cnwhile')]
                },
                {
                    opcode: 'cnwhilenot',
                    blockType: 'conditional',
                    branchCount: 1,
                    text:[this.formatMessage('cnwhilenot')]
                },
                {
                    opcode: 'cnwhileelse',
                    blockType: 'conditional',
                    branchCount: 2,
                    isTerminal:true,
                    text:[this.formatMessage('cnwhile'),this.formatMessage('cnelse')]
                },
                {
                    opcode: 'cnrepeatwhile',
                    blockType: 'conditional',
                    branchCount: 1,
                    text:[this.formatMessage('cnrepeatwhile')],
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:233
                        }
                    }
                },
                {
                    opcode: 'cnrepeatwhilenot',
                    blockType: 'conditional',
                    branchCount: 1,
                    text:[this.formatMessage('cnrepeatwhilenot')],
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:233
                        }
                    }
                },
                {
                    opcode: 'cnrepeatifelse',
                    blockType: 'conditional',
                    branchCount: 2,
                    text:[this.formatMessage('cnrepeatif'),this.formatMessage('cnelse')],
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:233
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                '---' + this.formatMessage('titleBranches'),
                {
                    blockType: 'button',
                    text: this.formatMessage('simpleconditionbranch'),
                    onClick: () => {
                        this.branchnewnumber=prompt(this.formatMessage('simpleconditionbranch?'))
                        if (this.branchnewnumber>=2) {
                            this.branchnumber = this.branchnewnumber;
                            this.branchsurface = ["2"];
                            for(let i = 3; i <= this.branchnumber; i++)this.branchsurface.push(String(i));
                            this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'cnifreference',
                    blockType: 'conditional',
                    branchCount: this.branchnumber,
                    text:[this.formatMessage('cnifreference')].concat(this.branchsurface),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:0
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'cnwhilereference',
                    blockType: 'conditional',
                    branchCount: this.branchnumber,
                    text:[this.formatMessage('cnwhilereference')].concat(this.branchsurface),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:0
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'cnifreferencetwentyfive',
                    blockType: 'conditional',
                    branchCount: 25,
                    text:[this.formatMessage('cnifreference'),'2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'],
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode: 'cnwhilereferencetwentyfive',
                    blockType: 'conditional',
                    branchCount: 25,
                    text:[this.formatMessage('cnwhilereference'),'2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'],
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:0
                        }
                    }
                },
                
                '---' + this.formatMessage('titletobecontinued')
            ],
            menus:{
                boolean:{
                    acceptReporters:true,
                    items:['','true','false']
                }
            }
        }
    }
    test(){
        return this.branchnumber + JSON.stringify(this.branchsurface)
    }
    docs() {
        let a = document.createElement('a');
        a.href = "https://learn.ccw.site/article/home/94b02f81-cc94-451d-9b2e-7a5404fbaa6e";
        a.rel = "noopener noreferrer";
        a.target = "blank";
        a.click();
    }
    findExtConfigComment() {
        const stage = this.runtime.getTargetForStage();
        if (!stage || !stage.comments) return undefined;
        return stage.comments[EXTCONFIGCOMMENTID];
    }
    getAllExtConfig() {
        const comment = this.findExtConfigComment();
        if (!comment) return undefined;
        const lines = comment.text.split('\n');
        if (lines.length === 0) {
          console.warn(
            `${simpleconditionextensionId}: Extension config comment does not contain valid line.`,
          );
          return undefined;
        }
        const jsonText = lines[lines.length - 1];
        try {
          const parsed = JSON.parse(jsonText);
          if (!parsed || typeof parsed !== 'object') {
            throw new Error('Invalid object');
          }
          return parsed;
        } catch (e) {
          console.warn(`${simpleconditionextensionId}: Config comment has invalid JSON`, e);
          return undefined;
        }
    }
    parseExtConfig() {
        let config = this.getAllExtConfig();
        if (!config) return false;
        config = config[simpleconditionextensionId];
        if (!config) return false;
        if ('hideExtraBlocks' in config) {
          this.hideExtraBlocks = Cast.toBoolean(config.hideExtraBlocks);
          this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
        }
        return true;
    }
    generateExtConfig() {
        const options = {};
        options.hideExtraBlocks = this.hideExtraBlocks;
        return options;
    }
    
      storeExtConfig() {
        let config = this.getAllExtConfig();
        if (!config) config = {};
        config[simpleconditionextensionId] = this.generateExtConfig();
    
        const existingComment = this.findExtConfigComment();
        if (existingComment) {
          const lines = existingComment.text.split('\n');
          if (lines.length === 0) {
            lines.push('');
          }
          lines[lines.length - 1] = JSON.stringify(config);
          existingComment.text = lines.join('\n');
        } else {
          const target = this.runtime.getTargetForStage();
          const text = `${this.formatMessage('config.tip')}\n${JSON.stringify(
            config,
          )}`;
          target.createComment(
            EXTCONFIGCOMMENTID,
            null,
            text,
            1,
            1,
            400,
            200,
            false,
          );
        }
        this.runtime.emitProjectChanged();
    }
    ToBoolean(a){
        return ! [0,false,'','0','false','undefined','null'].includes(a)
    }
    cnif(args, util){
        if (! [0,false,'','0','false','undefined','null'].includes(args.a)){
            util.startBranch()
        }
    }
    cnifnot(args, util){
        if ([0,false,'','0','false','undefined','null'].includes(args.a)){
            util.startBranch()
        }
    }
    cnifelse(args, util){
        util.startBranch(1+([0,false,'','0','false','undefined','null'].includes(args.a)))
    }
    cnwhile(args, util){
        if (! [0,false,'','0','false','undefined','null'].includes(args.a)){
            util.startBranch(1,true)
        }
    }
    cnwhilenot(args, util){
        if ([0,false,'','0','false','undefined','null'].includes(args.a)){
            util.startBranch(1,true)
        }
    }
    cnwhileelse(args, util){
        util.startBranch(1+([0,false,'','0','false','undefined','null'].includes(args.a)),true)
    }
    cnrepeatwhile(args, util){
        const { stackFrame } = util;
        if (typeof stackFrame.loopCounter === "undefined") {
            stackFrame.n = Math.round(Number(args.a));
            stackFrame.loopCounter = 1;
        } 
        else {
            stackFrame.loopCounter += 1;
        }
        if (stackFrame.loopCounter > stackFrame.n || [0,false,'','0','false','undefined','null'].includes(args.b)) {
            return;
        }
        util.startBranch(1+([0,false,'','0','false','undefined','null'].includes(args.b)),true)
    }
    cnrepeatwhilenot(args, util){
        const { stackFrame } = util;
        if (typeof stackFrame.loopCounter === "undefined") {
            stackFrame.n = Math.round(Number(args.a));
            stackFrame.loopCounter = 1;
        } 
        else {
            stackFrame.loopCounter += 1;
        }
        if (stackFrame.loopCounter > stackFrame.n || ! [0,false,'','0','false','undefined','null'].includes(args.b)) {
            return;
        }
        util.startBranch(1+([0,false,'','0','false','undefined','null'].includes(args.b)),true)
    }
    cnrepeatifelse(args, util){
        const { stackFrame } = util;
        if (typeof stackFrame.loopCounter === "undefined") {
            stackFrame.n = Math.round(Number(args.a));
            stackFrame.loopCounter = 1;
        } 
        else {
            stackFrame.loopCounter += 1;
        }
        if (stackFrame.loopCounter > stackFrame.n) {
            return;
        }
        util.startBranch(1+([0,false,'','0','false','undefined','null'].includes(args.b)),true)
    }
    cnifreference(args, util){
        if (! [0,false,'','0','false','undefined','null'].includes(args.a)){
            util.startBranch(Number(args.a))
        }
    }
    cnwhilereference(args, util){
        if (! [0,false,'','0','false','undefined','null'].includes(args.a)){
            util.startBranch(Number(args.a),true)
        }
    }
    cnifreferencetwentyfive(args, util){
        if (! [0,false,'','0','false','undefined','null'].includes(args.a)){
            util.startBranch(Number(args.a))
        }
    }
    cnwhilereferencetwentyfive(args, util){
        if (! [0,false,'','0','false','undefined','null'].includes(args.a)){
            util.startBranch(Number(args.a),true)
        }
    }
}

window.tempExt = {
    Extension: simplecondition,
    info: {
        name: "simplecondition.name",
        description: "simplecondition.descp",
        extensionId: simpleconditionextensionId,
        iconURL: simpleconditionpicture,
        insetIconURL: simpleconditionicon,
        featured: true,
        disabled: false,
        collaborator: "bilioicik @ CCW",
        collaboratorURL: "https://www.ccw.site/student/6218cd094daafc57cebfc1d3"
    },
    l10n: {
        "zh-cn": {
            "simplecondition.name": "永无止境的驱动",
            "simplecondition.descp": "条件积木"
        },
        en: {
            "simplecondition.name": "Endless Drive",
            "simplecondition.descp": "conditional block"
        }
    }
};