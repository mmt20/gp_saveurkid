import { useEffect } from 'react';
import { getOneStudentWithParent } from '../../redux/action/studentAction';
import { useDispatch, useSelector } from 'react-redux';

const ViewStudentProfileHook = () => {
  const url = window.location.href;
  const segments = url.split('/');
  const studentIndex = segments.findIndex((segment) => segment === 'students');
  const id = segments[studentIndex + 1];

  // REDUX
  const dispatch = useDispatch();
  const student = useSelector((state) => state.allStudents.oneStudent);
  const loading = useSelector((state) => state.allStudents.loading);
  console.log(student);
  useEffect(() => {
    dispatch(getOneStudentWithParent(id));
  }, [dispatch, id]);
  console.log(student);

  return [student, loading];
};
export default ViewStudentProfileHook;
