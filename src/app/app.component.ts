import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'assignment';
  employees: any;
  search: string;
  constructor(private service: ServiceService){}

  ngOnInit(){
    this.getEmpData();
    $(document).on('click', '.emp-col', function(){
      let id = $(this).find('#id').text()
      let name = $(this).find('#name').text()
      let age = $(this).find('#age').text()
      let salary = $(this).find('#salary').text()
      $('.modal-body .id span').html(id)
      $('.modal-body .name span').html(name)
      $('.modal-body .age span').html(age)
      $('.modal-body .salary span').html(salary)
      console.log(name)
    })
    $(document).on('click','#grid', function(){
      $('.emp-col').removeClass('col-md-12');
      $('.emp-col > div').removeClass('row');
      $('.emp-col > div').addClass('grid');
      $('.emp-col').addClass('col-md-3');
      $('.emp-col.heading-emp').css('display','none');
    })
    $(document).on('click','#list', function(){
      $('.emp-col').removeClass('col-md-3');
      $('.emp-col > div').addClass('row');
      $('.emp-col > div').removeClass('grid');
      $('.emp-col').addClass('col-md-12');
      $('.emp-col.heading-emp').css('display','block');
    })
  }

  getEmpData(){
    return this.service.getEmployeesData().subscribe(response =>{
      this.employees = response.data
      console.log(this.employees)
    })
  }
}
