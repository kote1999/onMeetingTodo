import { Component } from '@angular/core';
import { faThList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  todoIcon = faThList;

  makeVisibleForm: boolean = false;

  levels: Level[] = [Level.Easy, Level.Medium, Level.Hard];
  tasks: Task[] = [];

  taskName: string ="";
  taskLevel: string = "";
  changeVisbForm(){
    this.makeVisibleForm = !this.makeVisibleForm;
  }

  onChange(event: any){
   this.taskLevel =  event.target.value;
  }

  pushinTodo(){
    this.tasks.push({name: this.taskName, level: <Level>(this.taskLevel)});
    console.log(this.tasks);
  }


  remove(i:number){
      this.tasks = this.tasks.filter((_, index) => i !==index);
  }

}

enum Level {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard"
}

interface Task {
  name: string;
  level: Level;
}
