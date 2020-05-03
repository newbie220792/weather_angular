import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberInput } from '@angular/cdk/coercion';

export interface StudentModule {
   id: number
   code: string
   gender: string
   name: string
   mail: string
   phone: string
   score: number
}
