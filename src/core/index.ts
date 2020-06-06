/*
 * @Author: last order
 * @Date: 2020-06-03 11:31:54
 * @LastEditTime: 2020-06-04 17:15:02
 */
import '@/assets/barrage.scss'

interface BarrageOptions {
    container: HTMLElement,
    width: number,
    height: number
}

export default class Barrage {
    options: BarrageOptions
    canvas?: CanvasRenderingContext2D

    constructor (options: BarrageOptions) {
        this.options = options
        this.init()
    }

    init (): void {
        const canvas = document.createElement('canvas')
        canvas.width = this.options.width
        canvas.height = this.options.height
        canvas.className = 'barrage'
        this.options.container.appendChild(canvas)
        this.canvas = canvas.getContext('2d')
    }
    random (max: number): number {
        return Math.floor(Math.random() * max)
    }
    draw (text: string): void {
        console.log(1)
        this.canvas.font = '20px sans-serif'
        this.canvas.fillText(text, this.random(700), this.random(400))
        console.log(this.canvas)
    }
}
