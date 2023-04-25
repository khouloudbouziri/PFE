import { Component } from '@angular/core';
import { TextSimilarityServiceService } from '../services/text-similarity-service.service';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent {

  
  public similarity: number = 0;

  constructor(private textSimilarityService: TextSimilarityServiceService) { }

  public calculateSimilarity(): void {
    //this.textSimilarityService.getCosineSimilarity(id,idC)
      //.subscribe(similarity => this.similarity = similarity);
  }
}
