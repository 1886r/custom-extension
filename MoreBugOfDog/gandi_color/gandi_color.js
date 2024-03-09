// 未完成 正在开发
const gandi_color_picture = "";

const gandi_color_icon = "";

const gandi_color_extensionId = "GandiColor";


class GandiColor {
    constructor(runtime) {
        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                "GandiColor.name": "个性化Gandi",
                "GandiColor.docs": "📖拓展教程",
                "GandiColor.jb": "设置 脚本区的颜色 为 [color_jb]",
                "GandiColor.bk": "设置 边框的颜色 为 [color_bk]",
                "GandiColor.bj": "设置 UI边界线的颜色 为 [color_bj]",
                "GandiColor.gn": "设置 标记当前功能对应UI的颜色 为 [color_gn]",
                "GandiColor.tx1": "设置 脚本区颜色 为 [color]",
                "GandiColor.tx": "⚠️危险功能",
                "GandiColor.code": "删除 ",

            },
            en: {
                "GandiColor.name": "[beta]WitCat’s FPS",
                "GandiColor.docs": "📖 Tutorial",

            }
        })
    }

    /**
     * 翻译
     * @param {string} id
     * @return {string}
     */
    formatMessage(id) {
        return this._formatMessage({
            id,
            default: id,
            description: id
        });
    }

    getInfo() {
        return {
            id: gandi_color_extensionId, // 拓展id
            name: this.formatMessage("GandiColor.name"), // 拓展名
            blockIconURI: gandi_color_icon,
            menuIconURI: gandi_color_icon,
            color1: "#EC3838",
            color2: "#B32B2B",
            blocks: [
                {
                    blockType: "button",
                    text: this.formatMessage('GandiColor.docs'),
                    onClick: this.docs,
                },

            ],
            menus: {
                type: [
                    {
                        text: this.formatMessage('GandiColor.type.1'),
                        value: 'true'
                    },
                    {
                        text: this.formatMessage('GandiColor.type.2'),
                        value: 'false'
                    },
                ],
            },
        };
    }

    /** 打开教程 */
    docs() {
        let a = document.createElement('a');
        a.href = "https://www.ccw.site/post/d6d96e80-3f58-4a19-b7e6-c567d3a6a583";
        a.rel = "noopener noreferrer";
        a.target = "_blank";
        a.click();
    }

    /**
     * 获取浏览器帧率用的回调函数
     * @param {DOMHighResTimeStamp} timestamp
     * @returns {void}
     */
    _webfpstick(timestamp) {
        // 存在多次开关功能导致该函数大量触发的情况。
        // 这样子设计，每帧只触发一次
        // 这里判断 webfpson 是否为真来判断是否要继续更新帧数，
        // 这样才能正常关闭。
        if (this.webfpson) {
            this.webfpstick_end = false;
            this.webfpscnt++;
            this.webfpsn = 1000 / (timestamp - this.webfpstime);
            this.webfpstime = timestamp;
            // 这里的 bind(this) 非常重要，让回调的时候 this 指向当前的 this。
            requestAnimationFrame(this._webfpstick.bind(this));
        }
        else {
            this.webfpstick_end = true;
        }
    }

    /**
     * 舞台的帧率
     * @return {number}
     */
    scratch() {
        return this.scfps;
    }

    /**
     * 舞台的瞬时帧率
     * @return {number}
     */
    nscratch() {
        return this.scfpsn;
    }

    /**
     * 浏览器的帧率
     * @return {number}
     */
    web() {
        return this.webfps;
    }

    /**
     * 浏览器的瞬时帧率
     * @return {number}
     */
    nweb() {
        return this.webfpsn;
    }

    /**
     * 设置舞台帧率检测
     * @param {object} args
     * @param {SCarg|"true"|"false"} args.type
     * @return {void}
     */
    turnon(args) {
        if (args.type == "true") {
            if (this.scfpson == false) {
                this.scfpson = true;
                this.scfpstime = Date.now();
                let that = this;
                this.runtime._step = function () {
                    if (that.scfpson) {
                        that.step.call(this);
                        let timestamp = Date.now();
                        that.scfpsn = 1000 / (timestamp - that.scfpstime);
                        that.scfpstime = timestamp;
                        that.scfpscnt++;
                    }
                }
                this.scfpsinterval = setInterval(() => {
                    this.scfps = this.scfpscnt;
                    this.scfpscnt = 0;
                }, 1000)
            }
        }
        else {
            if (this.scfpson == true) {
                this.scfpson = false;
                this.runtime._step = this.step;
                clearInterval(this.scfpsinterval);
                this.scfps = 0;
                this.scfpsn = 0;
            }
        }
    }

    /**
     * 设置浏览器帧率检测
     * @param {object} args
     * @param {SCarg|"true"|"false"} args.type
     * @return {void}
     */
    webturnon(args) {
        if (args.type == "true") {
            if (this.webfpson == false) {
                this.webfpson = true;
                this.webfpstime = Date.now();
                if (this.webfpstick_end) {
                    // 这里的 bind(this) 非常重要，让回调的时候 this 指向当前的 this。
                    requestAnimationFrame(this._webfpstick.bind(this));
                }
                this.webfpsinterval = setInterval(() => {
                    this.webfps = this.webfpscnt;
                    this.webfpscnt = 0;
                }, 1000)
            }
        }
        else {
            if (this.webfpson == true) {
                this.webfpson = false;
                clearInterval(this.webfpsinterval);
                this.webfps = 0;
                this.webfpsn = 0;
            }
        }
    }
    /**
     * @param {number} fps 对照帧率
     * @param {number} num 需要计算的值
     * @return {number}
     */
    compute(args) {
        return Number(args.num) / (this.scfpsn / Number(args.fps));
    }
}

window.tempExt = {
    Extension: GandiColor,
    info: {
        name: "GandiColor.name",
        description: "GandiColor.descp",
        extensionId: gandi_color_extensionId,
        iconURL: gandi_color_picture,
        insetIconURL: gandi_color_icon,
        featured: true,
        disabled: false,
        collaborator: "多bug的啸天犬 @ CCW"
    },
    l10n: {
        "zh-cn": {
            "GandiColor.name": "自定义gandi配色",
            "GandiColor.descp": "让每个人的gandi都有自己独特的颜色！"
        },
        en: {
            "GandiColor.name": "Custom gandi color scheme",
            "GandiColor.descp": "Let everyone's gandi have their own unique color!"
        }
    }
};
