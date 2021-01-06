import * as Yup from 'yup';

export const VoteFormsValidationSchema = () => {
    return Yup.object().shape({
        name: Yup.string().required('Required').trim().matches(/\s/g, 'Full Name is Require'),
        email: Yup.string().required('Required').trim().email(),
        vote: Yup.string().required('Required').trim(),
    });
};