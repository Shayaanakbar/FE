import React, { Component } from "react";
import axios from "axios";
import { Link, Route, NavLink } from "react-router-dom";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import styled from "styled-components";

//Styling//
const ViewPostContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const EditDelete = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin:15%;
`;

const PostBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Edit = styled(NavLink)`
  width:50%
`;
const Delete = styled.a`
width:50%
`;
const Title = styled.h2`
width:100%
`;


class ViewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Post: {},
      loading: true,
      isHidden: true
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchPost(id);
  }

  fetchPost = id => {
    axios
      .get(`https://expat-lambda.herokuapp.com/api/user/posts/${id}`)
      .then(response => {
        this.setState({
          post: response.data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <ViewPostContainer>
        <EditDelete>
          <Edit to={`/post/edit/${this.props.match.params.id}`}>
            Edit
          </Edit>

          <div>
            <Delete href="#" onClick={this.toggleHidden.bind(this)}>
              Delete
            </Delete>
            {!this.state.isHidden && (
              <DeletePost id={this.props.match.params.id} {...this.props} />
            )}
          </div>
          <PostBox>
            <Title>{this.state.title}</Title>
            <p>{this.state.description}</p>
          </PostBox>
        </EditDelete>
      </ViewPostContainer>
    );
  }
}

export default ViewPost;