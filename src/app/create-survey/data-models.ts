export class Survey{
    constructor( 
        public ID: number,
        public Type : string,
        public Title: string,
        public IsDeleted: boolean,
        public IsAnonymous : boolean,
        public Question: Question[]
       
        ){}
}

export class Question{
    constructor( 
        public ID: number,
        public Type: string,
        public Text: string,
        public options: Option[],
        public Required: boolean,
        public Remarks: string,
        public hasRemarks : boolean,
        ){}
}

export class Option{
    constructor(
        public ID: number,
        public OptionText: string,
        public OptionColor: string,
        public hasRemarks: boolean
    ){}
}


export class Category {
    constructor(public id: number, 
                public name:string, 
                public hasSubCategory: boolean,
                public parentId: number){ }
  }
  
  export class Product {
    constructor(public id: number,
                public name: string,
                public images: Array<any>,
                public oldPrice: number,
                public newPrice: number,
                public discount: number,
                public ratingsCount: number,
                public ratingsValue: number,
                public description: string,
                public availibilityCount: number,
                public color: Array<string>,
                public size: Array<string>,
                public weight: number,
                public categoryId: number){ }
  }
  