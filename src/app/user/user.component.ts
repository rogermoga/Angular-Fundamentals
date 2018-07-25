import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { NgForm, Form } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'bp-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [PostsService]
})
export class UserComponent implements OnInit {
  title = 'Weclome to Binding Project';
  name: string;
  email: string;
  adress: Adress;
  hobbies: string[];
  showhobbies: boolean;
  posts: Post[];


  constructor(private postsService: PostsService) {
    console.log("Constructor ran")

    this.name = "Roger Moga";
    this.email = "rogermoga@gmail.com";
    this.adress = {
      street: "Sardenya 180",
      city: "Barcelona",
      country: "Spain"
    }
    this.hobbies = ["Music", "Movies", "Sports"]
    this.showhobbies = false;
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts.json();
      console.log(this.posts);
    })
  }

  toggleHobbies() {
    if (this.showhobbies == true) {
      this.showhobbies = false;
    } else {
      this.showhobbies = true;
    }
  }

  addHobby(hobby, form:NgForm) {
    this.hobbies.push(hobby);
    form.reset();
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }

  ngOnInit() {
  }

}
interface Adress {
  street: string;
  city: string;
  country: string;
}

interface Post {
  id: number;
  title: string;
  body: string;

}