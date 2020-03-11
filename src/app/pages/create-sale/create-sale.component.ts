import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'; 
import { BeersaleService } from '../../services/beersale/beersale.service';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.scss']
})
export class CreateSaleComponent implements OnInit {
  name: FormControl;
  constructor(private beersaleService: BeersaleService) { 
    this.name = new FormControl("", Validators.required);
  }

  ngOnInit(): void {
  }
  CreateRecord(){
    let record = {};
    record['Name'] = this.name.value;
    this.beersaleService.create_NewUser(record).then(resp => {
      // this.name.setValue("");
      console.log(resp);
    })
    .catch(error => {
      console.log(error);
    });
  }
}
