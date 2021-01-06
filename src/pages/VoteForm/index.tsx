import React, { useContext } from 'react';
import { Formik, Field } from 'formik';
import { IVoteFields } from '../../models/vote-form';
import { VoteContext } from '../../context/votes';
import { VoteFormsValidationSchema } from '../../validations/vote-form';
import { AppData } from '../../utils/constants';

const VoteForm: React.FunctionComponent<any> = () => {
    const contextData = useContext(VoteContext);
    const { addVote } = contextData;
    const { Candidates } = AppData;

    const initialFormValues: IVoteFields = {
        name: '',
        email: '',
        vote: '',
    }

    const voteSubmitHandler = (values, { resetForm }) => {
        addVote(values);
        resetForm();
    }

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <Formik
                    initialValues={initialFormValues}
                    onSubmit={voteSubmitHandler}
                    validationSchema={VoteFormsValidationSchema}
                >
                    {
                        (formProps) => {
                            const { handleSubmit, errors, touched, values, handleChange, handleBlur } = formProps;

                            return (
                                <form onSubmit={handleSubmit}>
                                    <div className="control-wrapper">
                                        <Field
                                            placeholder="Full Name"
                                            id="name"
                                            name="name"
                                            type="text"
                                        />

                                        <span>{errors.name && touched.name && errors.name}</span>
                                    </div>

                                    <div className="control-wrapper">
                                        <Field
                                            placeholder="Email"
                                            id="email"
                                            name="email"
                                            type="text"
                                        />

                                        <span>{errors.email && touched.email && errors.email}</span>
                                    </div>

                                    <div className="control-wrapper">
                                        {
                                            Object.keys(Candidates).map(i => {
                                                return (
                                                    <label>
                                                        <Field type="radio" name="vote" value={i} key={i} />
                                                        {Candidates[i]}
                                                    </label>
                                                )
                                            })
                                        }
                                        <span>{errors.vote && touched.vote && errors.vote}</span>
                                    </div>

                                    <button type="submit">
                                        Submit
                                    </button>
                                </form>
                            )
                        }
                    }
                </Formik>
            </div>
        </>
    );
}

export default VoteForm