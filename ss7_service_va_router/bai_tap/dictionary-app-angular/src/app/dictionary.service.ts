import {Injectable} from '@angular/core';
import {IWORD} from './iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordList: IWORD[];

  constructor() {
    this.wordList = [];
    this.wordList.push({word: 'hello', mean: 'xin chào'});
    this.wordList.push({word: 'bye', mean: 'tạm biệt'});
    this.wordList.push({word: 'pig', mean: 'heo'});
    this.wordList.push({word: 'dog', mean: 'con chó'});
    this.wordList.push({word: 'cat', mean: 'con mèo'});
  }

  getAll() {
    return this.wordList;
  }

  translate(word: string) {
    for (let w of this.wordList) {
      if (w.word.toLowerCase() === word.toLowerCase()) {
        return w.mean;
      }
    }
  }
}
