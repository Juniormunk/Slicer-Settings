import React from 'react';
import './App.css';
import slicerSettings from './data/slicerSettings';

const SLICERS = [
  { key: 'cura', label: 'Cura' },
  { key: 'prusaslicer', label: 'PrusaSlicer' },
  { key: 'superslicer', label: 'SuperSlicer' },
  { key: 'orcaslicer', label: 'OrcaSlicer' },
  { key: 'bambuslicer', label: 'BambuSlicer' }
];

function SlicerFilter({ selected, onChange }) {
  return (
    <div className="slicer-filter">
      <label>Filter by Slicer: </label>
      <select value={selected} onChange={e => onChange(e.target.value)}>
        <option value="">All</option>
        {SLICERS.map(s => (
          <option key={s.key} value={s.key}>{s.label}</option>
        ))}
      </select>
    </div>
  );
}

function SearchBox({ value, onChange }) {
  return (
    <input
      className="search-box"
      type="text"
      placeholder="Search"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}

function SettingDropdown({ setting, expanded }) {
  if (!expanded) return null;
  return (
    <tr className="dropdown-row">
      <td colSpan={4} className="dropdown-td">
        <div className="dropdown-content">
          <div className="dropdown-flex">
            <div className="dropdown-inner">
              <div className="dropdown-description">
                <div><strong>Description:</strong> {setting.description}</div>
                <div className="dropdown-slicer-locations">
                  <strong>
                    Slicer Locations:
                    <ul>
                      {SLICERS.map(s => (
                        <li key={s.key}><b>{s.label}:</b> {setting.slicerLocations[s.key]}</li>
                      ))}
                    </ul>
                  </strong>
                </div>
              </div>
            </div>
            {setting.image && (
              <div className="dropdown-image-fullwidth">
                <img
                  src={import.meta.env.BASE_URL + 'src/assets/' + setting.image}
                  alt={setting.name + ' example'}
                  className="dropdown-img"
                />
              </div>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
}

function SettingsTable({
  settings,
  expandedId,
  onExpand,
  selectedSlicer,
  sortBy,
  sortDir,
  onSort,
  search,
  setSearch,
  slicer,
  setSlicer
}) {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'otherNames', label: 'Other Names' },
    { key: 'shortDescription', label: 'Short Description' },
    { key: 'slicerLocation', label: slicer ? `${SLICERS.find(s => s.key === slicer).label} Location` : 'Slicer Location' }
  ];

  // Detect mobile using a media query
  const [isMobile, setIsMobile] = React.useState(window.matchMedia('(max-width: 1000px)').matches);
  React.useEffect(() => {
    const handler = e => setIsMobile(e.matches);
    const mq = window.matchMedia('(max-width: 1000px)');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <table className="settings-table">
      <colgroup>
        <col />
        <col />
        <col />
        <col className="slicer-location-col" />
      </colgroup>
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th
              key={col.key}
              onClick={() => onSort(col.key)}
              className={col.key === 'slicerLocation' ? 'settings-th slicer-location-col' : 'settings-th'}
            >
              {/* Move search box to shortDescription on mobile, otherwise keep in slicerLocation */}
              {(!isMobile && col.key === 'slicerLocation') && (
                <div className="table-controls-inline">
                  <SearchBox value={search} onChange={setSearch} />
                </div>
              )}
              {(isMobile && col.key === 'shortDescription') && (
                <div className="table-controls-inline">
                  <SearchBox value={search} onChange={setSearch} />
                </div>
              )}
              {col.label}
              {sortBy === col.key && (
                <span className="sort-arrow">{sortDir === 'asc' ? '▲' : '▼'}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {settings.map(setting => [
          <tr key={setting.id} onClick={() => onExpand(expandedId === setting.id ? null : setting.id)} className={expandedId === setting.id ? 'selected' : ''}>
            <td>{setting.name}</td>
            <td>{setting.otherNames ? setting.otherNames.join(', ') : ''}</td>
            <td>{setting.description.split('.')[0] + '.'}</td>
            <td className="slicer-location-col">
              {slicer
                ? setting.slicerLocations[slicer]
                : SLICERS.map(s => (
                  <div key={s.key}><b>{s.label}:</b> {setting.slicerLocations[s.key]}</div>
                ))}
            </td>
          </tr>,
          <SettingDropdown key={setting.id + '-dropdown'} setting={setting} expanded={expandedId === setting.id} />
        ])}
      </tbody>
    </table>
  );
}

function App() {
  const [expandedId, setExpandedId] = React.useState(null);
  const [search, setSearch] = React.useState('');
  const [slicer, setSlicer] = React.useState('');
  const [sortBy, setSortBy] = React.useState('name');
  const [sortDir, setSortDir] = React.useState('asc');

  const handleSort = (col) => {
    if (sortBy === col) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(col);
      setSortDir('asc');
    }
  };

  const filtered = slicerSettings.filter(setting => {
    const searchText = search.toLowerCase();
    const matchesSearch =
      setting.name.toLowerCase().includes(searchText) ||
      (setting.otherNames && setting.otherNames.some(n => n.toLowerCase().includes(searchText))) ||
      (setting.description && setting.description.toLowerCase().includes(searchText)) ||
      (setting.description && setting.description.split('.')[0].toLowerCase().includes(searchText));
    const matchesSlicer = !slicer || setting.slicerLocations[slicer];
    return matchesSearch && matchesSlicer;
  });

  // Sorting logic
  const sorted = [...filtered].sort((a, b) => {
    let aVal, bVal;
    if (sortBy === 'name') {
      aVal = a.name;
      bVal = b.name;
    } else if (sortBy === 'otherNames') {
      aVal = a.otherNames ? a.otherNames.join(', ') : '';
      bVal = b.otherNames ? b.otherNames.join(', ') : '';
    } else if (sortBy === 'shortDescription') {
      aVal = a.description.split('.')[0];
      bVal = b.description.split('.')[0];
    } else if (sortBy === 'slicerLocation') {
      if (slicer) {
        aVal = a.slicerLocations[slicer] || '';
        bVal = b.slicerLocations[slicer] || '';
      } else {
        aVal = Object.values(a.slicerLocations).join(' | ');
        bVal = Object.values(b.slicerLocations).join(' | ');
      }
    }
    if (aVal < bVal) return sortDir === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="container">
      <SettingsTable
        settings={sorted}
        expandedId={expandedId}
        onExpand={setExpandedId}
        selectedSlicer={slicer}
        sortBy={sortBy}
        sortDir={sortDir}
        onSort={handleSort}
        search={search}
        setSearch={setSearch}
        slicer={slicer}
        setSlicer={setSlicer}
      />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <a
              href="https://github.com/Juniormunk/Slicer-Settings"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              View / make suggestions on GitHub
            </a>
          </div>
          <div className="footer-right">
            ⚠️ Contains AI generated content.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
