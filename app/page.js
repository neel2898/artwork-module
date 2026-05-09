'use client';

import { useState } from 'react';
import './page.css';

export default function Home() {
  const [activeScreen, setActiveScreen] = useState('queue');

  return (
    <main className="app-container">
      {/* Screen Switcher for Client Review */}
      <div className="screen-switcher">
        <div className="switcher-content">
          <h2>Artwork Module — UX Review v0.6</h2>
          <div className="screen-buttons">
            <button
              className={`screen-btn ${activeScreen === 'queue' ? 'active' : ''}`}
              onClick={() => setActiveScreen('queue')}
            >
              <span className="dot"></span> My Queue
            </button>
            <button
              className={`screen-btn ${activeScreen === 'canvas' ? 'active' : ''}`}
              onClick={() => setActiveScreen('canvas')}
            >
              <span className="dot"></span> Artwork Canvas
            </button>
            <button
              className={`screen-btn ${activeScreen === 'comparison' ? 'active' : ''}`}
              onClick={() => setActiveScreen('comparison')}
            >
              <span className="dot"></span> Side-by-Side
            </button>
            <button
              className={`screen-btn ${activeScreen === 'intake' ? 'active' : ''}`}
              onClick={() => setActiveScreen('intake')}
            >
              <span className="dot"></span> Intake
            </button>
            <button
              className={`screen-btn ${activeScreen === 'archive' ? 'active' : ''}`}
              onClick={() => setActiveScreen('archive')}
            >
              <span className="dot"></span> Archive
            </button>
          </div>
          <p className="switcher-note">
            Click screens above to navigate · Press Esc to close navigator
          </p>
        </div>
      </div>

      {/* Product Screens */}
      <div className="screens-container">
        {/* Screen 1: My Queue */}
        {activeScreen === 'queue' && (
          <div className="screen-content">
            <ScreenMyQueue />
          </div>
        )}

        {/* Screen 2: Artwork Canvas */}
        {activeScreen === 'canvas' && (
          <div className="screen-content">
            <ScreenArtworkCanvas />
          </div>
        )}

        {/* Screen 3: Side-by-Side Comparison */}
        {activeScreen === 'comparison' && (
          <div className="screen-content">
            <ScreenComparison />
          </div>
        )}

        {/* Screen 4: Intake */}
        {activeScreen === 'intake' && (
          <div className="screen-content">
            <ScreenIntake />
          </div>
        )}

        {/* Screen 5: Archive */}
        {activeScreen === 'archive' && (
          <div className="screen-content">
            <ScreenArchive />
          </div>
        )}
      </div>
    </main>
  );
}

// ============================================================
// SCREEN 1: MY QUEUE
// ============================================================
function ScreenMyQueue() {
  return (
    <div className="product-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">F</div>
          <div className="brand-text">
            <div className="brand-name">FoLSol</div>
            <div className="brand-sub">Artwork</div>
          </div>
        </div>

        <div className="nav-section">Main</div>
        <a className="nav-item active">
          <i className="icon">📋</i>
          My Queue
          <span className="badge">4</span>
        </a>
        <a className="nav-item">
          <i className="icon">📁</i>
          All Artworks
        </a>

        <div className="nav-section">Tools</div>
        <a className="nav-item">
          <i className="icon">📊</i>
          Dashboard
        </a>
        <a className="nav-item">
          <i className="icon">⚙️</i>
          Settings
        </a>

        <div className="footer-section">
          <div className="user-card">
            <div className="user-avatar">N</div>
            <div>
              <div className="user-name">Neel</div>
              <div className="user-role">Design Lead</div>
            </div>
          </div>
        </div>
      </aside>

      <div className="page">
        <div className="topbar">
          <div className="crumbs">
            <span className="current">My Queue</span>
          </div>
          <div className="right">
            <input placeholder="Search artworks…" className="search-box" />
            <button className="icon-btn">🔔</button>
          </div>
        </div>

        <div className="page-body">
          <div className="page-header">
            <div>
              <h1 className="page-title">My Queue</h1>
              <p className="page-subtitle">4 artworks waiting on you · 1 overdue</p>
            </div>
            <button className="btn btn-primary">+ New Artwork</button>
          </div>

          <div className="filter-bar">
            <span className="filter-chip active">All</span>
            <span className="filter-chip">Intake</span>
            <span className="filter-chip">In review</span>
            <span className="filter-chip">Color proof</span>
            <span className="filter-chip">Approved</span>
            <span className="filter-chip" style={{ borderColor: 'var(--danger)', color: 'var(--danger)' }}>
              Overdue
            </span>
          </div>

          <div className="artwork-list">
            {[
              {
                name: 'Bisleri 1L · Hindi launch',
                sku: 'BSR-1L-HI-2026',
                version: 3,
                stage: 'In review',
                lenses: ['Mkt', 'Reg'],
                updated: '2h ago',
              },
              {
                name: 'Amul Butter & Garlic 100g',
                sku: 'AML-B&G-100-2026',
                version: 1,
                stage: 'Intake',
                lenses: ['Mkt', 'R&D', 'Nut', 'Reg', 'Legal', 'Prod'],
                updated: '5h ago',
              },
              {
                name: 'Britannia Good Day · Cashew',
                sku: 'BRT-GD-CSH-FEST',
                version: 2,
                stage: '⚠️ Blocked',
                lenses: ['Mkt ⚠', 'Reg ⚠'],
                updated: '1d ago (OVERDUE)',
                isOverdue: true,
              },
              {
                name: 'Pepsi 750ml · Tri-lingual',
                sku: 'PEP-750-MLT-2026',
                version: 4,
                stage: 'In review',
                lenses: ['Mkt'],
                updated: '1d ago',
              },
            ].map((item, idx) => (
              <div key={idx} className={`artwork-card ${item.isOverdue ? 'overdue' : ''}`}>
                <div className="card-content">
                  <h3>{item.name}</h3>
                  <p className="sku">{item.sku} · V{item.version}</p>
                </div>
                <div className="card-meta">
                  <span className="stage-badge">{item.stage}</span>
                  <div className="lenses">
                    {item.lenses.map((lens, i) => (
                      <span key={i} className="lens-tag">
                        {lens}
                      </span>
                    ))}
                  </div>
                  <span className="time">{item.updated}</span>
                </div>
                <button className="card-action">→</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SCREEN 2: ARTWORK CANVAS
// ============================================================
function ScreenArtworkCanvas() {
  const [selectedLens, setSelectedLens] = useState('marketing');

  const lenses = [
    { id: 'marketing', label: 'Marketing', color: '#8B5CF6', elements: 'Logos, Colors, Graphics' },
    { id: 'rd', label: 'R&D', color: '#0891B2', elements: 'Regulatory' },
    { id: 'nutrition', label: 'Nutrition', color: '#16A34A', elements: 'Claims, Labels' },
    { id: 'regulatory', label: 'Regulatory', color: '#E11D48', elements: 'Declarations, QR' },
    { id: 'legal', label: 'Legal', color: '#6366F1', elements: 'Font, Metrology' },
    { id: 'production', label: 'Production', color: '#DB2777', elements: 'Sizing, Shape' },
  ];

  return (
    <div className="product-shell canvas-view">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">F</div>
          <div className="brand-text">
            <div className="brand-name">FoLSol</div>
            <div className="brand-sub">Artwork</div>
          </div>
        </div>
        <div className="nav-section">Main</div>
        <a className="nav-item">
          <i className="icon">📋</i>
          My Queue
          <span className="badge">4</span>
        </a>
      </aside>

      <div className="page">
        <div className="topbar">
          <div className="crumbs">
            <span>My Queue</span>
            <span className="sep">/</span>
            <span className="current">Bisleri 1L · Hindi launch</span>
          </div>
        </div>

        <div className="canvas-container">
          {/* Left Panel: Lenses */}
          <aside className="canvas-left">
            <div className="lenses-header">
              <h3>Review Lenses</h3>
              <p className="hint">Switch to view elements by department</p>
            </div>

            <div className="lenses-grid">
              {lenses.map((lens) => (
                <button
                  key={lens.id}
                  className={`lens-option ${selectedLens === lens.id ? 'active' : ''}`}
                  onClick={() => setSelectedLens(lens.id)}
                  style={{
                    borderColor: lens.color,
                    backgroundColor: selectedLens === lens.id ? `${lens.color}10` : 'transparent',
                  }}
                >
                  <div className="lens-dot" style={{ backgroundColor: lens.color }}></div>
                  <div className="lens-info">
                    <h4>{lens.label}</h4>
                    <p>{lens.elements}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="ai-findings">
              <h4>AI Findings</h4>
              <div className="finding-item warning">
                <span className="icon">⚠️</span>
                <div>
                  <p className="title">Font size check</p>
                  <p className="desc">May be below legal minimum</p>
                </div>
              </div>
              <div className="finding-item success">
                <span className="icon">✅</span>
                <div>
                  <p className="title">Logo detected</p>
                  <p className="desc">Brand logo quality good</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Center: Canvas & Image */}
          <div className="canvas-center">
            <div className="artwork-viewer">
              <div className="viewer-placeholder">
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📄</div>
                <p>Artwork Image Viewer</p>
                <small>Canvas with zoom, pan, element markers</small>
                <div
                  style={{
                    marginTop: '24px',
                    padding: '16px',
                    backgroundColor: 'rgba(0,0,0,0.02)',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                >
                  <strong style={{ color: selectedLens === 'marketing' ? '#8B5CF6' : '#5B6573' }}>
                    {lenses.find((l) => l.id === selectedLens)?.label}
                  </strong>{' '}
                  elements highlighted
                </div>
              </div>
            </div>

            <div className="canvas-toolbar">
              <button className="tool-btn">+ Comment</button>
              <button className="tool-btn">View History</button>
              <button className="tool-btn">Side-by-side</button>
            </div>
          </div>

          {/* Right Panel: Comments & Metadata */}
          <aside className="canvas-right">
            <div className="panel-section">
              <h4>Artwork Details</h4>
              <div className="detail-item">
                <span className="label">SKU</span>
                <span className="value">BSR-1L-HI-2026</span>
              </div>
              <div className="detail-item">
                <span className="label">Version</span>
                <span className="value">V3</span>
              </div>
              <div className="detail-item">
                <span className="label">Status</span>
                <span className="value" style={{ color: 'var(--warning)' }}>
                  In review
                </span>
              </div>
            </div>

            <div className="panel-section">
              <h4>Comments</h4>
              <div className="comment">
                <div className="comment-head">
                  <strong>Aanya</strong>
                  <span className="time">1h ago</span>
                </div>
                <p>Logo placement looks good. Font size needs verification against legal specs.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SCREEN 3: SIDE-BY-SIDE COMPARISON
// ============================================================
function ScreenComparison() {
  return (
    <div className="product-shell">
      <div className="page">
        <div className="topbar">
          <div className="crumbs">
            <span>My Queue</span>
            <span className="sep">/</span>
            <span className="current">Comparison</span>
          </div>
        </div>

        <div className="comparison-container">
          <div className="comparison-header">
            <h2>Version Comparison</h2>
            <p className="subtitle">Current (V3) vs Previous (V2)</p>
          </div>

          <div className="comparison-layout">
            <div className="comparison-panel">
              <div className="panel-header">Current Version (V3)</div>
              <div className="comparison-viewer">
                <div className="viewer-placeholder">📄 V3 Artwork</div>
              </div>
            </div>

            <div className="comparison-divider"></div>

            <div className="comparison-panel">
              <div className="panel-header">Previous Version (V2)</div>
              <div className="comparison-viewer">
                <div className="viewer-placeholder">📄 V2 Artwork</div>
              </div>
            </div>
          </div>

          <div className="changes-list">
            <h3>Changes Detected</h3>
            <div className="change-item">
              <span className="change-type modified">Modified</span>
              <span>Font size increased for legal compliance</span>
            </div>
            <div className="change-item">
              <span className="change-type added">Added</span>
              <span>QR code on back panel</span>
            </div>
            <div className="change-item">
              <span className="change-type">Unchanged</span>
              <span>Logo placement, colors, graphics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SCREEN 4: INTAKE
// ============================================================
function ScreenIntake() {
  return (
    <div className="product-shell">
      <div className="page">
        <div className="topbar">
          <div className="crumbs">
            <span className="current">New Artwork</span>
          </div>
        </div>

        <div className="intake-container">
          <div className="intake-header">
            <h1>Create New Artwork Review</h1>
            <p className="subtitle">Upload and configure a new artwork for multi-department review</p>
          </div>

          <div className="intake-steps">
            {[
              { num: 1, title: 'Upload PDF', desc: 'Select the artwork PDF file', active: true },
              { num: 2, title: 'Select SKU', desc: 'Choose product SKU' },
              { num: 3, title: 'Assign Reviewers', desc: 'Auto-assign departments' },
              { num: 4, title: 'Review & Start', desc: 'Confirm settings' },
            ].map((step) => (
              <div key={step.num} className={`step ${step.active ? 'active' : ''}`}>
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="intake-form">
            <div className="form-section">
              <h3>Step 1: Upload Artwork PDF</h3>
              <div className="upload-box">
                <div className="upload-icon">📤</div>
                <p className="upload-text">Drag PDF here or click to browse</p>
                <input type="file" accept=".pdf" style={{ display: 'none' }} />
              </div>
            </div>

            <div className="form-section">
              <h3>Step 2: Select SKU</h3>
              <select>
                <option>Bisleri 1L</option>
                <option>Amul Butter 100g</option>
                <option>Britannia Good Day</option>
              </select>
            </div>

            <div className="form-section">
              <h3>Step 3: Assign Reviewers</h3>
              <div className="reviewers-grid">
                {['Marketing', 'R&D', 'Nutrition', 'Regulatory', 'Legal', 'Production'].map((dept) => (
                  <div key={dept} className="reviewer-item">
                    <input type="checkbox" defaultChecked id={`reviewer-${dept}`} />
                    <label htmlFor={`reviewer-${dept}`}>{dept}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-actions">
              <button className="btn btn-secondary">Cancel</button>
              <button className="btn btn-primary">Create & Start Review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SCREEN 5: ARCHIVE
// ============================================================
function ScreenArchive() {
  return (
    <div className="product-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">F</div>
          <div className="brand-text">
            <div className="brand-name">FoLSol</div>
            <div className="brand-sub">Artwork</div>
          </div>
        </div>
        <div className="nav-section">Main</div>
        <a className="nav-item">
          <i className="icon">📋</i>
          My Queue
          <span className="badge">4</span>
        </a>
        <a className="nav-item active">
          <i className="icon">📁</i>
          All Artworks
        </a>
      </aside>

      <div className="page">
        <div className="topbar">
          <div className="crumbs">
            <span className="current">Archive</span>
          </div>
          <div className="right">
            <input placeholder="Search…" className="search-box" />
            <button className="icon-btn">🔔</button>
          </div>
        </div>

        <div className="page-body">
          <div className="page-header">
            <div>
              <h1 className="page-title">All Artworks</h1>
              <p className="page-subtitle">42 approved · 12 in development</p>
            </div>
          </div>

          <div className="archive-grid">
            {[
              { name: 'Bisleri 1L · Hindi', brand: 'Bisleri', status: 'Approved', version: 'V3' },
              { name: 'Amul Butter · 100g', brand: 'Amul', status: 'Approved', version: 'V1' },
              { name: 'Britannia Good Day', brand: 'Britannia', status: 'Approved', version: 'V2' },
              { name: 'Pepsi 750ml', brand: 'Pepsi', status: 'Approved', version: 'V4' },
              { name: '7Up 600ml', brand: '7Up', status: 'Approved', version: 'V3' },
              { name: 'Bingo Mad Angles', brand: 'Bingo', status: 'Approved', version: 'V2' },
            ].map((artwork, idx) => (
              <div key={idx} className="archive-card">
                <div className="card-thumb">
                  <span className="brand-label">{artwork.brand}</span>
                </div>
                <div className="card-info">
                  <h4>{artwork.name}</h4>
                  <p className="version">{artwork.version} · Approved</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
