import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import "./survey.css"; // Ensure this CSS file is imported for styling

const Survey3 = () => {
  const [formData, setFormData] = useState({
    workload: "",
    workLifeBalance: "",
    stressAtWork: "",
    emotionalWellBeing: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send survey data to your backend endpoint for Survey 3
      const response = await axios.post(
        "http://localhost:5000/survey3",
        formData
      );
      console.log("Survey submitted successfully:", response.data);
      setMessage("Survey submitted successfully!");
    } catch (error) {
      console.error("Error submitting survey", error);
      setMessage("Error submitting survey. Please try again.");
    }
  };

  return (
    <Container className="survey-container">
      <h2>Depression Survey - Professionals</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>How would you describe your workload?</Form.Label>
          <Form.Control
            as="select"
            name="workload"
            value={formData.workload}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="Too much">Too much</option>
            <option value="Manageable">Manageable</option>
            <option value="Too little">Too little</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Do you feel you have a good work-life balance?
          </Form.Label>
          <Form.Control
            as="select"
            name="workLifeBalance"
            value={formData.workLifeBalance}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rate your stress at work (1-10)</Form.Label>
          <Form.Control
            type="number"
            name="stressAtWork"
            min="1"
            max="10"
            value={formData.stressAtWork}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Describe your emotional well-being</Form.Label>
          <Form.Control
            as="textarea"
            name="emotionalWellBeing"
            value={formData.emotionalWellBeing}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Survey
        </Button>
      </Form>

      {message && (
        <div className="mt-3 alert alert-info text-center">{message}</div>
      )}
    </Container>
  );
};

export default Survey3;
