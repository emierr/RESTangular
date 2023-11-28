export interface Ladoklist {

    //Ladok
    ladokId: number;
    betyg: string;
    status: string;
    //studentITS
    personNr: string;
    //Epok
    kursKod: string;
    //Examination
    datum: string;
    typ: string;
    //Modul
    aktiv: string;
    benamning: string;
    //Canvas
    fNamn: string;
    eNamn: string;
    studentAnvandare: string;
    //Modulomdöme
    omdome: string;
    isSelected: boolean;
    isEdit: boolean;

    
    
}

export const Ladoklistcolumns = [
    {
        key: 'isSelected',
        type: 'ïsSelected',
        label: ''
     },
     {
        key: 'isSelected',
        type: 'ïsSelected',
        label: 'Efternamn'
     },
     {
        key: 'isSelected',
        type: 'ïsSelected',
        label: 'Förnamn'
     },
     {
        key: 'isSelected',
        type: 'ïsSelected',
        label: 'Omdöme i Canvas'
     },
     {
        key: 'isSelected',
        type: 'ïsSelected',
        label: 'Betyg i Ladok'
     },
     {
        key: 'isSelected',
        type: 'ïsSelected',
        label: 'Examinationsdatum'
     },
     {
        key: 'isSelected',
        type: 'ïsSelected',
        label: 'Status'
     },
     {
      key: 'isEdit',
      type: 'ïsEdit',
      label: '',
     },
]