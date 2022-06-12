import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, EventEmitter, HostBinding, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  implements OnInit {

  constructor(private responsive: BreakpointObserver,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private overlay: OverlayContainer) {
    iconRegistry.addSvgIcon(
      'css',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/css.svg')
    );
    iconRegistry.addSvgIcon(
      'git',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/git2.svg')
    );
    iconRegistry.addSvgIcon(
      'lin',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/lin.svg')
    );
    iconRegistry.addSvgIcon(
      'arr',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/arr.svg')
    );
    iconRegistry.addSvgIcon(
      'html',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/html.svg')
    );
    iconRegistry.addSvgIcon(
      'c',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/c.svg')
    );
    iconRegistry.addSvgIcon(
      'ora2',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/ora2.svg')
    );
    iconRegistry.addSvgIcon(
      'sql',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/sql.svg')
    );
    iconRegistry.addSvgIcon(
      'ang',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/ang.svg')
    );
    iconRegistry.addSvgIcon(
      'vue',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/vue.svg')
    );
    iconRegistry.addSvgIcon(
      'actv',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/actv.svg')
    );
    iconRegistry.addSvgIcon(
      'boot',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/boot.svg')
    );
    iconRegistry.addSvgIcon(
      'mat',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/mat.svg')
    );
  }
  hideSideMenu = false;

  title = 'Portfolio';
  toggleControl= new FormControl(false);
  @HostBinding('class') className = '';
  ngOnInit(): void {
    //dark mode
    this.toggleControl.valueChanges.subscribe((darktheme) => {
      const darkClassName = 'darktheme';
      this.className = darktheme ? darkClassName : '';
      if (darktheme) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
    //respn
    this.responsive.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletLandscape,
      ])
      .subscribe(result => {

        this.hideSideMenu = false;

        if (result.matches) {
          this.hideSideMenu = true;
        }

  });
}
}
