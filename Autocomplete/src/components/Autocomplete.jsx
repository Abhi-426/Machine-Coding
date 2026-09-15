import { useRef } from "react";

function Autocomplete({ data, loading, onChange, wait }) {
  const timeoutRef = useRef(null);

  const handleChange = (event) => {
    const value = event.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onChange(event);
    }, wait);
  };
  return (
    <div style={{ width: "300px" }}>
      <input
        type="text"
        placeholder="Search GitHub users..."
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          boxSizing: "border-box",
        }}
      />

      {loading && <div>Loading...</div>}

      {data.length > 0 && (
        <div
          style={{
            border: "1px solid #ccc",
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {data.map((user) => (
            <div
              key={user.id}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                width="30"
                height="30"
                style={{
                  borderRadius: "50%",
                  verticalAlign: "middle",
                  marginRight: "10px",
                }}
              />

              {user.login}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Autocomplete;
