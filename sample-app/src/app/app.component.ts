import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sample Application';
  ngOnInit() { 
    this.loadScript('../node_modules/jquery/dist/jquery.slim.min.js');
    this.loadScript('../node_modules/popper.js/dist/umd/popper.min.js');
    this.loadScript('../node_modules/bootstrap/dist/js/bootstrap.min.js');
    this.loadScript('../node_modules/d3/dist/d3.min.js');
    this.loadScript('..node_modules/plotly.js/dist/plotly.js');
  }

  //this allow angular to dynamically load the javascript for each page. otherwise it does not do so natively
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}

