import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
selector: 'multiselect-component',
templateUrl: './multiselect.component.html',
styleUrl: './multiselect.component.css'
})
export class MultiselectComponent implements OnInit {
countriesList: any = [];
statesList: any = [];
citiesList: any = [];
index = -1;
submitFormList: any[] = [];
submitForm = new FormGroup({
countryId: new FormControl(''),
stateId: new FormControl(''),
cityId: new FormControl(''),
countryName: new FormControl(''),
stateName: new FormControl(''),
cityName: new FormControl(''),
})
ngOnInit(): void {
this.getCountries();
this.getStates();
this.getCities();
}
getCountries() {
this.countriesList = [
{ id: 1, name: "Singapore" },
{ id: 2, name: "India" },
]
}
getStates() {
this.statesList = [
{ id: 1, name: "Central Region", countryId: 1 },
{ id: 2, name: "North Region", countryId: 1 },
{ id: 3, name: "West Region", countryId: 1 },
{ id: 4, name: "Andrapradesh", countryId: 2 },
{ id: 5, name: "Telangana", countryId: 2 },
]
}
getCities() {
this.citiesList = [
{ id: 1, name: "Amravati", stateId: 4 },
{ id: 2, name: "Vijayawada", stateId: 4 },
{ id: 3, name: "Hyderabad", stateId: 5 },
{ id: 4, name: "Warangal", stateId: 5 },
{ id: 5, name: "Phoenix", stateId: 1 },
{ id: 6, name: "Tucson ", stateId: 1 },
{ id: 7, name: "Seldovia", stateId: 1 },
{ id: 8, name: "Tanana", stateId: 2 },
{ id: 9, name: "Tampa", stateId: 2 },
{ id: 10, name: "Orlando ", stateId: 2 },
{ id: 11, name: "Coral", stateId: 3 },
{ id: 12, name: "Tallahassee", stateId: 3 }
]
}
countryChange(countryid: any) {
this.statesList = [];
this.citiesList = [];
this.getStates()
let statesList = this.statesList.filter((x: any) => { return countryid.value.includes(x.countryId); })
if (statesList.length > 0) {
this.statesList = statesList;
}
let countrName = this.countriesList.filter((x: any) => countryid.value.indexOf(x.id) > -1).map((y: any) => y.name);
this.submitForm.controls["countryName"].patchValue(countrName)
this.updateStateFormControle();
this.stateChange(this.submitForm.controls["stateId"])
}
stateChange(stateId: any) {
this.citiesList = [];
this.getCities()
let citiesList = this.citiesList.filter((x: any) => { return stateId.value.includes(x.stateId); })
if (citiesList.length > 0) {
this.citiesList = citiesList;
}
let stateName = this.statesList.filter((x: any) => stateId.value.indexOf(x.id) > -1).map((y: any) => y.name);
this.updateCityFormControle();
this.submitForm.controls["stateName"].patchValue(stateName);
}
cityChange(cityId: any) {
let cityName = this.citiesList.filter((x: any) => cityId.value.indexOf(x.id) > -1).map((y: any) => y.name);
this.submitForm.controls["cityName"].patchValue(cityName)
}

submit() {
if (this.submitForm.valid) {
if (this.index > -1) {
this.submitFormList[this.index] = this.submitForm.value
}
else {
this.submitFormList.push(this.submitForm.value)
}
this.submitForm.reset();
this.index = -1;
}
}
modify(item: any, index: any) {
this.submitForm.patchValue(item);
this.index = index;
}
updateStateFormControle() {
if (this.submitForm.controls["stateId"].value != null && this.submitForm.controls["stateId"].value != "" && this.submitForm.controls["stateId"].value?.length > 0) {
let selectedState = this.submitForm.controls["stateId"].value;
let matchedStateId = this.statesList.filter((x: any) => selectedState.indexOf(x.id) > -1).map((z: any) => z.id);
this.submitForm.controls["stateId"].patchValue(matchedStateId);
}
}
updateCityFormControle() {
if (this.submitForm.controls["cityId"].value != null && this.submitForm.controls["cityId"].value != "" && this.submitForm.controls["cityId"].value?.length > 0) {
let selectedCity = this.submitForm.controls["cityId"].value;
let matchedCityId = this.citiesList.filter((x: any) => selectedCity.indexOf(x.id) > -1).map((z: any) => z.id);
this.submitForm.controls["cityId"].patchValue(matchedCityId);
}
}
}
