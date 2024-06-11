import { Component, Input, Output } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {
  @Input({required:true}) pokemon !: Pokemon;
}