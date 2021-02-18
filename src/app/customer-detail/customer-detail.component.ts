import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerForm } from '../cf/cf.component';

export class Customer {
  name: string;
  position: number;
  phone: number;
  place: string;
  funds: number;
}

const ELEMENT_DATA: Customer[] = [
  {
    position: 1,
    name: 'Hydhar',
    phone: 8838348953,
    place: 'Tirupur',
    funds: 2,
  },
  { position: 2, name: 'John', phone: 9874632534, place: 'Kangayam', funds: 5 },
  { position: 3, name: 'Lolla', phone: 6374251609, place: 'Avinasi', funds: 7 },
  {
    position: 4,
    name: 'Naveen',
    phone: 9985674532,
    place: 'Usha Theatre',
    funds: 1,
  },
  {
    position: 5,
    name: 'Kumar',
    phone: 7643569010,
    place: 'Nachipalayam',
    funds: 2,
  },
];

@Component({
  selector: 'app-customer-detail',
  styleUrls: ['./customer-detail.component.css'],
  templateUrl: './customer-detail.component.html',
})
export class CustomerDetailComponent implements OnInit {
  ngOnInit(): void {
    this.dataSource.filterPredicate = this.customerNameFilterPredicate;
  }

  displayedColumns: string[] = ['position', 'name', 'phone', 'place', 'funds'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.valueOf().toLowerCase();
  }

  customerNameFilterPredicate(data: any, filter: string): boolean {
    let customerRow = Object.assign(new Customer(), data);
    return customerRow.name.toLocaleLowerCase().includes(filter);
  }
}
