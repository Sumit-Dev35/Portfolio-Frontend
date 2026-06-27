export interface EducationModel {
  degree: string;
  collegeName: string;
  place: string;
  resultType: 'CGPA' | 'Percentage';
  totalMarks: number;
  obtainedMarks: number;
  startDuration: Date;
  endDuration: Date;
  _id: string;
}
