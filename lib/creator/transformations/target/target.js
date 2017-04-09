const utils = require('../../../transformations/utils');
/*
safeTraverse,
createProperty,
findPluginsByName,
findPluginsRootNodes,
createOrUpdatePluginByName,
findVariableToPlugin,
isType,
createLiteral,
findObjWithOneOfKeys,
getRequire
*/

module.exports = function(j, ast, webpackProperties) {
	function createTargetProperty(p) {
		if(p.parent.value.type === 'AssignmentExpression') {
			return p.value.properties.push(utils.createProperty(j, 'target', webpackProperties['target']));
		}
	}
	if(webpackProperties['target'] && webpackProperties['target'].length) {
		return ast.find(j.ObjectExpression).filter(p => createTargetProperty(p));
	} else {
		return ast;
	}
};