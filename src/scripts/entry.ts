import { TCanvas } from '../home/TCanvas'

class App {
	private canvas: TCanvas
	constructor() {
		const parentNode = document.querySelector('body')!
		this.canvas = new TCanvas(parentNode)
	}
}

new App()
