import { EducationModel } from './education.model';

export class EducationData {
  educationDetails: EducationModel[] = [
    {
      degree: 'Bachelor of Technology in Electrical Engineering',
      collegeName: 'National Institute of Technology, Patna',
      place: 'Patna, Bihar',
      resultType: 'CGPA',
      totalMarks: 10,
      obtainedMarks: 7.92,
      startDuration: new Date('2020-12-01'),
      endDuration: new Date('2024-05-20'),
      _id: this.generateRandomId(),
    },
    {
      degree: 'Higher Secondary Education (Science)',
      collegeName: 'S.S.K. Inter College, Chandwatpur, Gonda',
      place: 'Gonda, Uttar Pradesh',
      resultType: 'Percentage',
      totalMarks: 100,
      obtainedMarks: 88,
      startDuration: new Date('2017-04-01'),
      endDuration: new Date('2018-03-31'),
      _id: this.generateRandomId(),
    },
    {
      degree: 'Secondary Education',
      collegeName: 'S.S.K. Inter College, Chandwatpur, Gonda',
      place: 'Gonda, Uttar Pradesh',
      resultType: 'Percentage',
      totalMarks: 100,
      obtainedMarks: 85,
      startDuration: new Date('2015-04-01'),
      endDuration: new Date('2016-03-31'),
      _id: this.generateRandomId(),
    },
  ];

  generateRandomId(): string {
    return crypto.randomUUID();
  }
}
