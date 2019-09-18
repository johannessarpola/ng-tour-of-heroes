import { Component, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-lifecycle",
  templateUrl: "./lifecycle.component.html",
  styleUrls: ["./lifecycle.component.css"]
})
export class LifecycleComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
    this.detailsForm = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      email: new FormControl("")
    });
  }

  detailsForm: FormGroup;
  submitted = false;

  onSubmit() {
    console.log("onSubmit");
    console.log(this.detailsForm.value);
    console.log(this.detailsForm);
    this.submitted = true;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.detailsForm.valueChanges
      .pipe(debounceTime(300))
      .subscribe(subscription => {
        console.log("detailsForm subscription");
        console.log(subscription);
      });
    console.log("ngOnInit");
  }
  // ngDoCheck(): void {
  //   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //   //Add 'implements DoCheck' to the class.
  //   console.log("ngDoCheck");
  // }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("ngOnDestroy");
  }

  /*   ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("ngAfterContentChecked");
  } */
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("ngAfterContentInit");
  }

  /*   ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("ngAfterViewChecked");
  }
 */
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ngAfterViewInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("ngOnChanges");
    console.log(changes);
  }
}
