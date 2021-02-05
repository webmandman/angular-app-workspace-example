import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CodeGeneratorService {
  generate(): string {
    const code = Math.floor(Math.random() * 10000 + 1);
    return `PSO${code}`;
  }
}
