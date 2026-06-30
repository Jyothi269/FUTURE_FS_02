import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [source, setSource] = useState("");

  const [leads, setLeads] = useState([]);

  const addLead = () => {
    if (!name || !email || !source) {
      alert("Please fill all fields");
      return;
    }

    const newLead = {
      name,
      email,
      source,
      status: "New",
      notes: "",
    };

    setLeads([...leads, newLead]);

    setName("");
    setEmail("");
    setSource("");
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1>Mini CRM Dashboard</h1>

      <h3>Total Leads: {leads.length}</h3>

      <h3>
        Converted Leads:{" "}
        {leads.filter((lead) => lead.status === "Converted").length}
      </h3>

      <hr />

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        type="text"
        placeholder="Lead Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <button
        onClick={addLead}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Add Lead
      </button>

      <hr />

      <h2>Leads List</h2>

      {leads.map((lead, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <p>
            <b>Name:</b> {lead.name}
          </p>

          <p>
            <b>Email:</b> {lead.email}
          </p>

          <p>
            <b>Source:</b> {lead.source}
          </p>

          <p>
            <b>Status:</b>{" "}
            <select
              value={lead.status}
              onChange={(e) => {
                const updatedLeads = [...leads];
                updatedLeads[index].status = e.target.value;
                setLeads(updatedLeads);
              }}
            >
              <option>New</option>
              <option>Contacted</option>
              <option>Converted</option>
            </select>
          </p>

          <p>
            <b>Follow-up Notes:</b>
          </p>

          <textarea
            rows="3"
            value={lead.notes}
            onChange={(e) => {
              const updatedLeads = [...leads];
              updatedLeads[index].notes = e.target.value;
              setLeads(updatedLeads);
            }}
            style={{
              width: "100%",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default App;