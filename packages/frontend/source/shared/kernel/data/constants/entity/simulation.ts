// #region imports
    // #region libraries
    import {
        NewEntityField,
    } from '~kernel-components/NewEntityRenderer/data';
    // #endregion libraries
// #endregion imports



// #region module
export const fields: NewEntityField[] = [
    {
        label: 'solver options',
        type: 'group',
        state: 'solver_options',
        value: [
            {
                label: 'type',
                type: 'string',
                state: 'type',
                value: 'full',
                required: true,
                help: `
                type of solver to enable for this simulation, as any following string:
                * "full", a complete but slower solver producing publication-quality results
                  by comprehensively simulating all possible bioelectrical phenomena.
                * "fast", an incomplete but faster solver producing draft-quality results
                  by the well-known equivalent circuit formalism analogizing biological
                  systems to electronic circuits. While integrated with gene regulatory
                  networks (GRNs), this solver *CANNOT* simulate:
                  * Bioelectric fields or currents.
                  * Extracellular voltages or voltage polarities.
                  * Ion concentrations.
                  These phenomena are silently ignored when this solver is enabled.
                `,
            },
        ],
    },
    {
        label: 'init time settings',
        type: 'group',
        state: 'init_time_settings',
        value: [
            {
                label: 'time step',
                type: 'number',
                state: 'time_step',
                value: 1.0e-2,
                format: 'scientific',
                required: true,
                unit: 's',
                help: `time step-size (recommended at least 1.0e-2 or smaller)`,
            },
            {
                label: 'total time',
                type: 'number',
                state: 'total_time',
                value: 5.0,
                format: 'float',
                required: true,
                unit: 's',
                help: `end time`,
            },
            {
                label: 'sampling rate',
                type: 'number',
                state: 'sampling_rate',
                value: 1.0,
                format: 'float',
                required: true,
                unit: 's',
                help: `time interval to sample data (at least value of time-step or larger)`,
            },
        ],
        required: true,
    },
    {
        label: 'sim time settings',
        type: 'group',
        state: 'sim_time_settings',
        value: [
            {
                label: 'time step',
                type: 'number',
                state: 'time_step',
                value: 1.0e-4,
                format: 'scientific',
                required: true,
                unit: 's',
                help: `time step-size (recommended at least 1.0e-4 or smaller)`,
            },
            {
                label: 'total time',
                type: 'number',
                state: 'total_time',
                value: 0.035,
                format: 'float',
                required: true,
                unit: 's',
                help: `time to end sim run`,
            },
            {
                label: 'sampling rate',
                type: 'number',
                state: 'sampling_rate',
                value: 1.0e-3,
                format: 'scientific',
                required: true,
                unit: 's',
                help: `period to sample data (at least time step or larger)`,
            },
        ],
        required: true,
    },
    {
        label: 'general options',
        type: 'group',
        state: 'general_options',
        value: [
            {
                label: 'comp grid size',
                type: 'number',
                state: 'comp_grid_size',
                value: 25,
                format: 'integer',
                required: true,
                help: `grid used in computation of environmental parameters (min 10; keep smaller than 50)`,
            },
            {
                label: 'simulate extracellular spaces',
                type: 'boolean',
                state: 'simulate_extracellular_spaces',
                value: true,
                required: true,
                help: `include extracellular spaces and true environment simulation`,
            },
            {
                label: 'ion profile',
                type: 'string',
                state: 'ion_profile',
                value: 'basic',
                required: true,
                help: `
                    ion profile options:
                      * 'basic' (Na+, K+, M-, and proteins-)
                      * 'basic_Ca' (Na+, K+, Ca2+, M- and proteins-)
                      * 'mammal' (Na+, K+, Cl-, Ca2+, M- and proteins-) typical mammal
                      * 'amphibian' (Na+, K+, Cl-, Ca2+, M- and proteins-) Xenopus
                      * 'custom' (user-specified settings, see below)
                    (all profiles contain an unidentified charge-balance anion, M-)
                `,
            },
            {
                label: 'customized ion profile',
                type: 'group',
                state: 'customized_ion_profile',
                value: [
                    {
                        label: 'extracellular Na+ concentration',
                        type: 'number',
                        state: 'extracellular_Na_Concentration',
                        value: 145.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `extracellular sodium`,
                    },
                    {
                        label: 'extracellular K+ concentration',
                        type: 'number',
                        state: 'extracellular_K_Concentration',
                        value: 5.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `extracellular potassium`,
                    },
                    {
                        label: 'extracellular Cl- concentration',
                        type: 'number',
                        state: 'extracellular_Cl_Concentration',
                        value: 115.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `extracellular chloride`,
                    },
                    {
                        label: 'extracellular Ca2+ concentration',
                        type: 'number',
                        state: 'extracellular_Ca2_Concentration',
                        value: 2.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `extracellular calcium`,
                    },
                    {
                        label: 'extracellular protein- concentration',
                        type: 'number',
                        state: 'extracellular_Protein_Concentration',
                        value: 10.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `extracellular protein`,
                    },

                    {
                        label: 'cytosolic Na+ concentration',
                        type: 'number',
                        state: 'cytosolic_Na_Concentration',
                        value: 12.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `intracellular sodium`,
                    },
                    {
                        label: 'cytosolic K+ concentration',
                        type: 'number',
                        state: 'cytosolic_K_Concentration',
                        value: 139.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `intracellular potassium`,
                    },
                    {
                        label: 'cytosolic Cl- concentration',
                        type: 'number',
                        state: 'cytosolic_Cl_Concentration',
                        value: 4.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `intracellular chloride`,
                    },
                    {
                        label: 'cytosolic Ca2+ concentration',
                        type: 'number',
                        state: 'cytosolic_Ca2_Concentration',
                        value: 2.0e-5,
                        format: 'scientific',
                        required: true,
                        unit: 'mmol/L',
                        help: `intracellular calcium`,
                    },
                    {
                        label: 'cytosolic protein- concentration',
                        type: 'number',
                        state: 'cytosolic_Protein_Concentration',
                        value: 135.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `intracellular protein`,
                    },
                ],
                required: true,
                help: `
                    User-defined initial values of ion concentrations for the "init" phase.
                    Extracellular and cytosolic levels of all ions must sum to zero charge.
                `,
            },
        ],
        required: true,
    },
    {
        label: 'variable settings',
        type: 'group',
        state: 'variable_settings',
        value: [
            {
                label: 'env boundary concentrations',
                // type: 'dictionary',
                type: 'string',
                state: 'env_boundary_concentrations',
                required: true,
                value: '',
                // #    Na: 145.0    # Na+ concentration at bound [mM]
                // #    K: 4.0      # K+ concentration at bound [mM]
                // #    Cl: 115.0    # Cl- concentration at bound [mM]
                // #    Ca: 2.0     # Ca2+ concentration at bound [mM]
                // #    P: 9.0      # Protein- concentration at bound [mM]
                // #    M: 29.0     # Anion (bicarbonate) concentration at bound [mM]
                help: `
                    these concentrations are placed at the global boundary during init and sim
                    altering these is an easy way to change extracellular ion concentrations
                    uncomment the fields below to set new env boundaries, otherwise feature ignored!
                `,
            },
            {
                label: 'temperature',
                type: 'number',
                state: 'temperature',
                value: 310,
                format: 'float',
                required: true,
                unit: 'K',
                help: `system temperature`,
            },
            {
                label: 'deformation',
                type: 'group',
                state: 'deformation',
                value: [
                    {
                        label: 'turn on',
                        type: 'boolean',
                        state: 'turn_on',
                        value: false,
                        required: true,
                        help: 'include deformation under the osmotic pressure influx and electric fields',
                    },
                    {
                        label: 'galvanotropism',
                        type: 'number',
                        state: 'galvanotropism',
                        value: 1.0e-9,
                        format: 'scientific',
                        required: true,
                        help: 'factor by which cells change shape to global electric field (can be 0.0 or negative)',
                    },
                    {
                        label: 'viscous damping',
                        type: 'number',
                        state: 'viscous_damping',
                        value: 0.01,
                        format: 'float',
                        required: true,
                        help: 'viscous damping of elastic waves in tissue (0.0 to 1.0; larger = higher damping)',
                    },
                    {
                        label: 'fixed cluster boundary',
                        type: 'boolean',
                        state: 'fixed_cluster_boundary',
                        value: true,
                        required: true,
                        help: 'exterior cells of the cluster are fixed (true) or free to move (false)',
                    },
                    {
                        label: 'young modulus',
                        type: 'number',
                        state: 'young_modulus',
                        value: 1.0e3,
                        format: 'scientific',
                        required: true,
                        unit: 'Pa',
                        help: `Young's modulus (elastic modulus) of individual cell (1 kPa to 1 MPa)`,
                    },
                ],
                required: true,
            },
            {
                label: 'pressures',
                type: 'group',
                state: 'pressures',
                value: [
                    {
                        label: 'include electrostatic pressure',
                        type: 'boolean',
                        state: 'include_electrostatic_pressure',
                        value: true,
                        required: true,
                    },
                    {
                        label: 'include osmotic pressure',
                        type: 'boolean',
                        state: 'include_osmotic_pressure',
                        value: false,
                        required: true,
                        help: 'include osmotic pressure in flow & deformation',
                    },
                    {
                        label: 'membrane water conductivity',
                        type: 'number',
                        state: 'membrane_water_conductivity',
                        value: 1e-2,
                        format: 'scientific',
                        required: true,
                        help: 'mem conductivity for osmotic inflow (aquaporin per unit surface) (~ 1e-3)',
                    },
                ],
                required: true,
            },
            {
                label: 'noise',
                type: 'group',
                state: 'noise',
                value: [
                    {
                        label: 'static noise level',
                        type: 'number',
                        state: 'static_noise_level',
                        value: 0,
                        format: 'float',
                        required: true,
                        help: 'level of variance in K+ leaks on cell membranes, appropriate range 0 (all cells equivalent) to 10.0 (very high variation)',
                    },
                    {
                        label: 'dynamic noise',
                        type: 'boolean',
                        state: 'dynamic_noise',
                        value: false,
                        required: true,
                        help: 'is dynamic noise desired? simulated as random-walk on cellular protein concentrations',
                    },
                    {
                        label: 'dynamic noise level',
                        type: 'number',
                        state: 'dynamic_noise_level',
                        value: 1e-6,
                        format: 'scientific',
                        required: true,
                        help: 'level of dynamic noise, appropriate range 0 (effect off) to 1e-5 (extremely high noise). Note high values may cause simulation instability',
                    },
                ],
                required: true,
            },
            {
                label: 'gap junctions',
                type: 'group',
                state: 'gapJunctions',
                value: [
                    {
                        label: 'gap junction surface area',
                        type: 'number',
                        state: 'gap_junction_surface_area',
                        value: 5.0e-8,
                        format: 'scientific',
                        required: true,
                        help: 'surface area of gj as fraction of cell area (1.0e-5 extremely open, 1e-9 closed)',
                    },
                    {
                        label: 'voltage sensitive gj',
                        type: 'boolean',
                        state: 'voltage_sensitive_gj',
                        value: true,
                        required: true,
                        help: 'gj close with voltage difference between cells',
                    },
                    {
                        label: 'gj voltage threshold',
                        type: 'number',
                        state: 'gj_voltage_threshold',
                        value: 15,
                        format: 'float',
                        required: true,
                        unit: 'mV',
                        help: 'cell-cell voltage at which gj are half closed, suggested range from 10 mV to 80 mV',
                    },
                    {
                        label: 'gj voltage window',
                        type: 'number',
                        state: 'gj_voltage_window',
                        value: 15,
                        format: 'float',
                        required: true,
                        unit: 'mV',
                        help: 'steepness of gating function (not currently used)',
                    },
                    {
                        label: 'gj minimum',
                        type: 'number',
                        state: 'gj_minimum',
                        value: 0.10,
                        format: 'float',
                        required: true,
                        unit: 'mV',
                        help: `for voltage sensitive gj, the fraction of maxium permeability when channel 'closed'`,
                    },
                ],
                required: true,
            },
            {
                label: 'tight junction scaling',
                type: 'number',
                state: 'tight_junction_scaling',
                value: 1.0,
                format: 'float',
                required: true,
                help: `factor by which tight junctions scale free-diffusion (range 1.0 to 5.0e-2)`,
            },
            {
                label: 'tight junction relative diffusion',
                type: 'group',
                state: 'tight_junction_relative_diffusion',
                value: [
                    {
                        label: 'Na',
                        type: 'number',
                        state: 'Na',
                        value: 1,
                        format: 'integer',
                        required: true,
                    },
                    {
                        label: 'K',
                        type: 'number',
                        state: 'K',
                        value: 1,
                        format: 'integer',
                        required: true,
                    },
                    {
                        label: 'Cl',
                        type: 'number',
                        state: 'Cl',
                        value: 1,
                        format: 'integer',
                        required: true,
                    },
                    {
                        label: 'Ca',
                        type: 'number',
                        state: 'Ca',
                        value: 1,
                        format: 'integer',
                        required: true,
                    },
                    {
                        label: 'M',
                        type: 'number',
                        state: 'M',
                        value: 1,
                        format: 'integer',
                        required: true,
                    },
                    {
                        label: 'P',
                        type: 'number',
                        state: 'P',
                        value: 1,
                        format: 'integer',
                        required: true,
                    },
                ],
                required: true,
                help: `relative values for tight junction ion permeability`,
            },
            {
                label: 'adherens junction scaling',
                type: 'number',
                state: 'adherens_junction_scaling',
                value: 1.0,
                format: 'float',
                required: true,
                help: `factor by which cell-cell junctions scale free-diffusion`,
            },
            {
                label: 'use Goldman calculator',
                type: 'boolean',
                state: 'use_Goldman_calculator',
                value: false,
                required: true,
                help: `calculate alternative Vmem with Goldman-Hodgkin-Katz (GHK) voltage equation for comparison purposes`,
            },
        ],
        required: true,
    },
    {
        label: 'results options',
        type: 'group',
        state: 'results_options',
        value: [
            {
                label: 'show cells',
                type: 'boolean',
                state: 'show_cells',
                value: true,
                required: true,
                help: `visualize discrete cells or only a homogeneous gradient of cell data`,
            },
            {
                label: 'enumerate cells',
                type: 'boolean',
                state: 'enumerate_cells',
                value: true,
                required: true,
            },
        ],
        required: true,
    },
    {
        label: 'internal parameters',
        type: 'group',
        state: 'internal_parameters',
        value: [
            // default free diffusion constants (cytoplasmic)
            {
                label: 'Do_Na',
                type: 'number',
                state: 'Do_Na',
                value: 1.33e-9,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `free diffusion constant sodium`,
            },
            {
                label: 'Do_K',
                type: 'number',
                state: 'Do_K',
                value: 1.96e-9,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `free diffusion constant potassium`,
            },
            {
                label: 'Do_Cl',
                type: 'number',
                state: 'Do_Cl',
                value: 2.03e-9,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `free diffusion constant chloride`,
            },
            {
                label: 'Do_Ca',
                type: 'number',
                state: 'Do_Ca',
                value: 1.0e-10,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `free diffusion constant calcium`,
            },
            {
                label: 'Do_M',
                type: 'number',
                state: 'Do_M',
                value: 1.0e-9,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `free diffusion constant mystery anchor ion`,
            },
            {
                label: 'Do_P',
                type: 'number',
                state: 'Do_P',
                value: 0.0,
                format: 'float',
                required: true,
                unit: 'm2/s',
                help: `free diffusion constant protein`,
            },

            // pump parameters
            {
                label: 'alpha_NaK',
                type: 'number',
                state: 'alpha_NaK',
                value: 1.0e-7,
                format: 'scientific',
                required: true,
                unit: 'm/mol*s',
                help: `max rate Na-K-ATPase pump (1.0e-6 to 1.0e-12)`,
            },
            {
                label: 'alpha_Ca',
                type: 'number',
                state: 'alpha_Ca',
                value: 5.0e-8,
                format: 'scientific',
                required: true,
                unit: 'm/mol*s',
                help: `pump rate for calcium ATPase in membrane per unit surface area`,
            },
            {
                label: 'substances affect Vmem',
                type: 'boolean',
                state: 'substances_affect_Vmem',
                value: true,
                required: true,
                help: `do ionic biochemicals, metabolites and gene products affect charge state`,
            },
            {
                label: 'environment volume multiplier',
                type: 'number',
                state: 'environment_volume_multiplier',
                value: 1.0,
                format: 'float',
                required: true,
                help: `level to multiply size of box-environment (applies for no ecm spaces only) 1.0`,
            },
            {
                label: 'membrane capacitance',
                type: 'number',
                state: 'membrane_capacitance',
                value: 0.05,
                format: 'float',
                required: true,
                unit: 'F/m2',
                help: `~0.05 to 0.1 cell membrane capacitance`,
            },
            {
                label: 'cell polarizability',
                type: 'number',
                state: 'cell_polarizability',
                value: 0.0,
                format: 'float',
                required: true,
                help: `cell relative dielectric constant (static, low frequency) (0.0 to 5.0e7)`,
            },
            {
                label: 'dielectric constant',
                type: 'number',
                state: 'dielectric_constant',
                value: 6.0,
                format: 'float',
                required: true,
                help: `dielectric constant of electrical double layer`,
            },
            {
                label: 'fast update ecm',
                type: 'boolean',
                state: 'fast_update_ECM',
                value: false,
                required: true,
                help: `use a coarse (fast) or fine (slow) method to update between env and cell grids`,
            },
            {
                label: 'sharpness env',
                type: 'number',
                state: 'sharpness_env',
                value: 1.0,
                format: 'float',
                required: true,
                help: `factor smoothing environmental concentrations, 0.0 max smoothing, 1.0 no smoothing`,
            },
            {
                label: 'sharpness cell',
                type: 'number',
                state: 'sharpness_cell',
                value: 0.5,
                format: 'float',
                required: true,
                help: `factor smoothing cellular fields, 0.0 maximum smoothing, 1.0 no smoothing`,
            },
            {
                label: 'true cell size',
                type: 'number',
                state: 'true_cell_size',
                value: 1.0e-5,
                format: 'scientific',
                required: true,
                help: `true cell size (important for scaling larger grid patches) 1.0e-5 to 2.5e-6 m`,
            },
        ],
        required: true,
        help: `
            While the following settings are available to you, please avoid editing them.
            Simulation instability may result from poor choice of these more sensitive parameters.
            BETSE requires these parameters for its internal use only.
        `,
    },
    {
        label: 'version',
        type: 'string',
        state: 'version',
        value: '1.0',
        required: true,
        help: `
            Configuration file version that this file conforms to. For reliable
            comparability, this is stored as a string rather than float scalar.
        `,
    },
];
// #endregion module
