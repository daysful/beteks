import json

from source.graphql.types.betse import \
    BetseSimulation, \
    BetseWorld, BetseWorldMeshRefinement, BetseWorldImportFromSVG, \
    BetseTissue, BetseTissueDiffusionConstants, BetseTissueCellTargets, \
    BetseIntervention, \
    BetseFunction, BetseFunctionGradientX, BetseFunctionGradientY, BetseFunctionGradientR, BetseFunctionPeriodic, BetseFunctionFSweep, BetseFunctionGradientBitmap, BetseFunctionSingleCell, \
    BetseNetwork, BetseNetworkOptimization, \
    BetseBiomolecule, BetseBiomoleculeGrowthAndDecay, BetseBiomoleculeIonChannelGating, BetseBiomoleculeActivePumping, BetseBiomoleculeChangeAtBounds, BetseBiomoleculePlotting, \
    BetseReaction, \
    BetseChannel, \
    BetseTransporter, \
    BetseModulator



def model_base(
    data: any,
    load_json: bool = True,
):
    if load_json:
        model = json.loads(data['data'])
    else:
        model = data

    model['id'] = data['id']
    if data.get('generated_at'):
        model['generated_at'] = data['generated_at']

    return model


def modelBetseSimulation(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)

    return BetseSimulation(**model)


def modelBetseWorld(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)
    model['mesh_refinement'] = BetseWorldMeshRefinement(**model['mesh_refinement'])
    model['import_from_svg'] = BetseWorldImportFromSVG(**model['import_from_svg'])

    return BetseWorld(**model)


def modelBetseTissue(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)
    model['diffusion_constants'] = BetseTissueDiffusionConstants(**model['diffusion_constants'])
    model['cell_targets'] = BetseTissueCellTargets(**model['cell_targets'])

    return BetseTissue(**model)


def modelBetseIntervention(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)

    return BetseIntervention(**model)


def modelBetseFunction(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)
    model['gradient_x'] = BetseFunctionGradientX(**model['gradient_x'])
    model['gradient_y'] = BetseFunctionGradientY(**model['gradient_y'])
    model['gradient_r'] = BetseFunctionGradientR(**model['gradient_r'])
    model['periodic'] = BetseFunctionPeriodic(**model['periodic'])
    model['f_sweep'] = BetseFunctionFSweep(**model['f_sweep'])
    model['gradient_bitmap'] = BetseFunctionGradientBitmap(**model['gradient_bitmap'])
    model['single_cell'] = BetseFunctionSingleCell(**model['single_cell'])

    return BetseFunction(**model)


def modelBetseNetwork(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)
    model['optimization'] = BetseNetworkOptimization(**model['optimization'])

    return BetseNetwork(**model)


def modelBetseBiomolecule(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)
    model['growth_and_decay'] = BetseBiomoleculeGrowthAndDecay(**model['growth_and_decay'])
    model['ion_channel_gating'] = BetseBiomoleculeIonChannelGating(**model['ion_channel_gating'])
    model['active_pumping'] = BetseBiomoleculeActivePumping(**model['active_pumping'])
    model['change_at_bounds'] = BetseBiomoleculeChangeAtBounds(**model['change_at_bounds'])
    model['plotting'] = BetseBiomoleculePlotting(**model['plotting'])

    return BetseBiomolecule(**model)


def modelBetseReaction(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)

    return BetseReaction(**model)


def modelBetseChannel(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)

    return BetseChannel(**model)


def modelBetseTransporter(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)

    return BetseTransporter(**model)


def modelBetseModulator(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)

    return BetseModulator(**model)
