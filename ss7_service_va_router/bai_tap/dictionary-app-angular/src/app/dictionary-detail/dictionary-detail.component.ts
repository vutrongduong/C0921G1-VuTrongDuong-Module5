import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IWORD} from '../iword';
import {DictionaryService} from '../dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: string;
  mean: string;

  constructor(private dictionaryService: DictionaryService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const wordTranslate = this.activatedRoute.snapshot.params.word;
    this.word = wordTranslate;
    this.mean = this.dictionaryService.translate(wordTranslate);
  }

}
