class Comment {
    static all = []
    constructor(object) {
        this.id = object.id
        this.prayerId = object.prayer_id
        
        this.body = object.body
        this.name = object.name
        this.city = object.city
        this.state = object.state

        this.createdAt = object.created_at

        this.constructor.all.push(this)

    }

    commentDisplay() {
        return `
            <div class="card-body text-center">
            <strong>${this.body}</strong>
            </div>
            
            <div class="card-text">
            ${this.name}
            </div>

            <div class="card-text" style="font-size: 10px;">        
                ${this.city}, ${this.state}
                     <br>
                ${this.createdAt}
            </div>           
            
        `
    }

    static formDisplay(){
        return `
        <div class="form">
            <form id="new-comment-form">
            
                <!-- N A M E -->
                <input type="text" class="form-control" name="comment[name]" placeholder="Name:"></input>    
                
                <!-- M E S S A G E -->
                <div class="form-outline">
                    <textarea class="form-control" name="comment[body]" rows="4" placeholder="Message:"></textarea>
                </div> 
                <!-- C I T Y -->  <!-- S T A T E-->
                <div class="row">
                    <div class="col">                    
                        <input type="text" class="form-control" name="comment[city]" placeholder="City" />                    
                    </div>

                    <div class="col">                    
                        <input type="text" class="form-control" name="comment[state]" placeholder="State" />                    
                    </div>
                </div>
                <!-- S U B M I T -->
                <div class="d-grid">
                    <input class="btn btn-primary" type="submit" value="Submit comment"></input>
                </div>


            </form>
        </div>
        `
    }
    
// = - = - = - = - = - = - = - = FORM HANDLING
    // COMMENT BUTTON CLICK
    static buttonClick(e) {
        

        Dom.injectCommentForm(e)
        // e.target.closest("[id^=prayer-box]").innerHTML += Comment.formDisplay()
    }
// = - = - = - = - = - = - = - = 
}