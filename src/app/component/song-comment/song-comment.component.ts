import { ICmt } from './../../interface/cmt';
import { Component, OnInit, Input } from '@angular/core';
import { ISong } from 'src/app/interface/song';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IUser } from 'src/app/interface/user';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-song-comment',
  templateUrl: './song-comment.component.html',
  styleUrls: ['./song-comment.component.scss']
})
export class SongCommentComponent implements OnInit {
  @Input() song: ISong;

  songComments: ICmt[] = [];
  commentForm: FormGroup;
  comment: ICmt = {
    content: '',
    song: {},
    user: {}
  };
  user: IUser;


  constructor(public activeModal: NgbActiveModal, private commentService: CommentService, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.updateFromDb();
    this.commentForm = this.fb.group({
      content: ''
    });
    this.userService.getUserByUsername(localStorage.getItem('username')).subscribe(user => this.user = user.data);
  }

  submit() {
    const content = this.commentForm.get('content').value;
    this.commentForm.reset();
    this.comment.content = content;
    this.comment.song = this.song;
    this.comment.user = this.user;
    console.log(this.comment);
    this.commentService.createCmtSong(this.comment).subscribe(success => this.songComments.push(this.comment));
    this.updateFromDb();
  }

  nameConvert(name) {
    const arr: String[] = name.split(' ');
    let result = '';
    arr.forEach(char => result += char.charAt(0).toUpperCase());
    return result;
  }

  updateFromDb() {
    this.commentService.getAllCmtSong(this.song.id).subscribe(comments => this.songComments = comments.data);
  }
}
