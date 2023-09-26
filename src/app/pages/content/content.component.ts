import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor (private router:ActivatedRoute){

  }
  private id: string | null = "0"

  photoCover: string = ''

  contentTitle: string = ''

  contentDescription: string = ''

  ngOnInit(): void {
    this.router.paramMap.subscribe(value => this.id = value.get("id"))
    this.setValuesToComponet(this.id)
  }

  setValuesToComponet(id:string | null){
    const result = dataFake.filter(article => article.id.toString() == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photo

  }


}
