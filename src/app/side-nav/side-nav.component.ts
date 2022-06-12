import { Component, EventEmitter, HostBinding, OnInit,Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  toggleControl = new FormControl(false);
  @HostBinding('class') className = '';
  isDarkThem= false
  @Output()darkmode = new EventEmitter(this.isDarkThem);
  constructor() { }
  switch(){
    this.isDarkThem= !this.isDarkThem
    this.darkmode.emit(this.isDarkThem)
    console.log(this.isDarkThem);

  }
  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'dark-theme';
      this.className = darkMode ? darkClassName : '';
    });
}

}
