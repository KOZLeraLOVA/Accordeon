import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { inject, Injectable } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, FormsModule],
	styleUrl: './app.component.scss',
	templateUrl: './app.component.html',
	template: ``
})
export class AppComponent {}
