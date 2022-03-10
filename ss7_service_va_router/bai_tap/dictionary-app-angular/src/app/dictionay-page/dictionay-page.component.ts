import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../dictionary.service';
import {IWORD} from '../iword';

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {
  wordList: IWORD[];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.wordList = this.dictionaryService.getAll();
  }

}
