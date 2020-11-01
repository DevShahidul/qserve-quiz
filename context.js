import React, { Component } from 'react';
//import items from './app/components/syllabus.data.json';
import courseData from './data.json';

const CourseContex = React.createContext();

class CourseProvider extends Component {

    state = {
        courseTitle: '',
        courses: [],
        progress:0.0,
        successRate:0.0,
        loading: true,
        lesson: [],
    }

    // GetData
    componentDidMount(){
        let courses = this.formateData(courseData);
        let getCourses = courses.map(item => item = {...item.courseItems});
        this.setState({
            courses: getCourses,
            loading: false,
            courseTitle: courses[0].courseTitle
        })
        //console.log(courses);
    }

    formateData(courseData){
        let tempItems = courseData.map(item => {
            let id = item.id;
            let courseTitle = item.title;  
            let courseItems = item.folders[0].courses.map(course => {
                let allCoursess = {...course};
                return allCoursess
            })          
            let courcess = {...item.folders, id, courseTitle, courseItems};
            return courcess;
        })
        return tempItems;
    }


    render(){
        return(
            <CourseContex.Provider value={{...this.state}}>
                {this.props.children}
            </CourseContex.Provider>
        )
    }
}

const CourseConsumer = CourseContex.Consumer;

// export const CourseConsumer = (Component) => {
//     return function ConsumerWrapper(props){
//         return (
//             <CourseConsumer>
//                 {value => <Component {...props} context={value} /> }
//             </CourseConsumer>
//         )
//     }
// }

export { CourseProvider, CourseConsumer, CourseContex};