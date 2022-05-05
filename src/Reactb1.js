import React from "react";

import './style.css'
class ShoppingList extends React.Component {


    

    render() {
        const list = [
            {
                name: "Truong",
                age:20,
                post:{
                    content: "oknhaahihi",
                    date: 30,
                },
                comment:[ {
                    name: "ok1",
                    comment: "top1"
                }]
            },
            {
                name: "Truong",
                age:20,
                post:{
                    content: "oknhaahihi",
                    date: 30,
                },
                comment:[ {
                    name: "ok2",
                    comment: "top2"
                }
            ]
            },
            {
                name: "Truong",
                age:20,
                post:{
                    content: "oknhaahihi",
                    date: 30,
                },
                comment:[ {
                    name: "ok3",
                    comment: "top3"
                }]
            },
            
        ]
        
        return(
            <>
                
                {list.map((post, index) => {
                    return (
                        <>
                        <h1>ten:{post.name}</h1>
                        <span>{post.age}</span>
                        <div className="container">
                            <span>
                                {post.post.content}
                            </span>
                        </div>

                        { post.comment.map((comment, index) =>{
                            console.log(comment, index, "post,index");
                            return(
                                <>
                                    <h1>comment:{comment.name}</h1>
                                    <span>
                                        {comment.comment}
                                    </span>
                                </>
                            )
                        })}
                        </>
                    )
                   
                }
                
                )
                
        
                }
                
            </>
        )
            
    } 
        
            

}
export default ShoppingList;