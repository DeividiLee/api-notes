export class CreateNoteDto {
    constructor(
        public title:string, 
        public content:string
    ){
        this.title = title
        this.content = content
    }
}
