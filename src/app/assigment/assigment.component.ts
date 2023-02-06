import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type InpputType = {value:number};
export type SectionType = InpputType[]
@Component({
  selector: 'app-assigment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assigment.component.html',
  styleUrls: ['./assigment.component.scss']
})
export class AssigmentComponent {
  items = [{value:0},{value:0}];

  onChange(section:SectionType,index: number, value: number): void {
    section[index].value = value; 
    section = [...this.items];

  }

  add(section: InpputType[]): void{
    section.push(this.createInput());
  }

  delete(section: SectionType, index:number):void{
    section.splice(index,1);
  }
  getResult(section: SectionType):number{
    return section.map((input)=> input.value).reduce((carry, value) => carry + value,0);
  }

  sections:SectionType[] = [this.createSection()];

  addsection(): void{
    this.sections.push(this.createSection());
  }
  deletesection(index: number):void{
    this.sections.splice(index,1);
  }

  private createInput(): InpputType{
    return {value:0}
  }

  private createSection(): InpputType[] {
    return [this.createInput()];
  }
}
