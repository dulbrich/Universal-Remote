<?php
	

	// GET THE PARAMATERS PASSED IN
	$irsendParam = $_GET['irsendParam'];
	$model = $_GET['model'];
	$code = $_GET['code'];

	// CONCATINATE THE IR SEND COMMAND
	$irsendCommand = "irsend " . $irsendParam . " " . $model . " " . "code";

	// EXECUTE COMMAND ON PI
	exec($irsendCommand);

?>